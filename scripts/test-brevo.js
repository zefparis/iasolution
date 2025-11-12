#!/usr/bin/env node

/**
 * Script de diagnostic pour Brevo API
 * Vérifie la configuration et la validité de la clé API
 */

const fs = require('fs');
const path = require('path');

// Lire le fichier .env.local
let BREVO_API_KEY = process.env.BREVO_API_KEY;

if (!BREVO_API_KEY) {
  try {
    const envPath = path.join(__dirname, '..', '.env.local');
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/BREVO_API_KEY=(.+)/);
    if (match) {
      BREVO_API_KEY = match[1].trim();
    }
  } catch (error) {
    console.error('❌ Impossible de lire .env.local:', error.message);
  }
}
const SENDER_EMAIL = 'ia.solution.monde@gmail.com'; // Email validé utilisé dans le code

console.log('\n🔍 === DIAGNOSTIC BREVO ===\n');

// 1. Vérifier la présence de la clé API
console.log('1️⃣  Vérification de la clé API...');
if (!BREVO_API_KEY) {
  console.error('❌ ERREUR: BREVO_API_KEY n\'est pas définie dans .env.local');
  process.exit(1);
}
console.log(`✅ Clé API trouvée: ${BREVO_API_KEY.substring(0, 20)}...`);

// 2. Vérifier la validité de la clé API
async function testApiKey() {
  console.log('\n2️⃣  Test de validité de la clé API...');
  try {
    const response = await fetch('https://api.brevo.com/v3/account', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'api-key': BREVO_API_KEY,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('❌ Clé API invalide ou expirée');
      console.error('Détails:', error);
      return false;
    }

    const data = await response.json();
    console.log('✅ Clé API valide');
    console.log(`   Compte: ${data.email}`);
    console.log(`   Nom: ${data.firstName} ${data.lastName}`);
    console.log(`   Plan: ${data.plan?.[0]?.type || 'N/A'}`);
    return true;
  } catch (error) {
    console.error('❌ Erreur lors du test de la clé API:', error.message);
    return false;
  }
}

// 3. Vérifier les expéditeurs validés
async function checkSenders() {
  console.log('\n3️⃣  Vérification des expéditeurs validés...');
  try {
    const response = await fetch('https://api.brevo.com/v3/senders', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'api-key': BREVO_API_KEY,
      },
    });

    if (!response.ok) {
      console.error('❌ Impossible de récupérer la liste des expéditeurs');
      return false;
    }

    const data = await response.json();
    console.log(`✅ ${data.senders?.length || 0} expéditeur(s) configuré(s):`);
    
    let senderFound = false;
    data.senders?.forEach(sender => {
      const isTarget = sender.email === SENDER_EMAIL;
      const status = sender.active ? '✅' : '❌';
      console.log(`   ${status} ${sender.email} - ${sender.name} ${isTarget ? '⭐ (utilisé)' : ''}`);
      if (isTarget && sender.active) {
        senderFound = true;
      }
    });

    if (!senderFound) {
      console.error(`\n❌ PROBLÈME: L'email ${SENDER_EMAIL} n'est pas validé!`);
      console.log(`\n📌 SOLUTION:`);
      console.log(`   1. Allez sur https://app.brevo.com/settings/senders`);
      console.log(`   2. Ajoutez et validez l'email: ${SENDER_EMAIL}`);
      console.log(`   3. Vérifiez votre boîte mail pour confirmer`);
      return false;
    }

    return true;
  } catch (error) {
    console.error('❌ Erreur lors de la vérification des expéditeurs:', error.message);
    return false;
  }
}

// 4. Test d'envoi d'email (optionnel)
async function testSendEmail() {
  console.log('\n4️⃣  Test d\'envoi d\'email (simulation)...');
  
  const testPayload = {
    sender: { email: SENDER_EMAIL, name: 'IA-Solution Test' },
    to: [{ email: SENDER_EMAIL, name: 'Test' }],
    subject: 'Test de configuration Brevo - IA-Solution',
    htmlContent: '<h1>Test réussi</h1><p>La configuration Brevo est fonctionnelle!</p>',
  };

  console.log('   Payload de test préparé');
  console.log(`   Expéditeur: ${testPayload.sender.email}`);
  console.log(`   Destinataire: ${testPayload.to[0].email}`);
  console.log('\n⚠️  Pour envoyer un email de test réel, décommentez le code ci-dessous');
  
  // Décommentez pour envoyer un vrai email de test:
  /*
  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(testPayload),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('❌ Échec de l\'envoi d\'email:', error);
      return false;
    }

    const result = await response.json();
    console.log('✅ Email envoyé avec succès!');
    console.log('   Message ID:', result.messageId);
    return true;
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi:', error.message);
    return false;
  }
  */
  
  return true;
}

// 5. Vérifier les limites du compte
async function checkLimits() {
  console.log('\n5️⃣  Vérification des limites d\'envoi...');
  try {
    const response = await fetch('https://api.brevo.com/v3/account', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'api-key': BREVO_API_KEY,
      },
    });

    if (!response.ok) {
      console.error('❌ Impossible de récupérer les informations du compte');
      return false;
    }

    const data = await response.json();
    
    if (data.plan?.[0]?.type) {
      console.log(`✅ Plan actif: ${data.plan[0].type}`);
    }
    
    // Vérifier les crédits (si applicable)
    if (data.plan?.[0]?.credits !== undefined) {
      console.log(`   Crédits restants: ${data.plan[0].credits}`);
    }
    
    return true;
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    return false;
  }
}

// Exécuter tous les tests
async function runDiagnostics() {
  try {
    const apiValid = await testApiKey();
    if (!apiValid) {
      console.log('\n❌ Diagnostic arrêté: clé API invalide\n');
      process.exit(1);
    }

    const sendersOk = await checkSenders();
    await checkLimits();
    await testSendEmail();

    console.log('\n' + '='.repeat(50));
    if (sendersOk) {
      console.log('✅ RÉSULTAT: Configuration Brevo OK!');
      console.log('   Le formulaire de contact devrait fonctionner.');
    } else {
      console.log('⚠️  RÉSULTAT: Configuration incomplète');
      console.log('   Veuillez valider l\'adresse email d\'envoi dans Brevo.');
    }
    console.log('='.repeat(50) + '\n');

  } catch (error) {
    console.error('\n❌ Erreur fatale:', error.message);
    process.exit(1);
  }
}

runDiagnostics();
