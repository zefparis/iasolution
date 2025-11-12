#!/usr/bin/env node

/**
 * Script pour tester l'API de contact
 */

const testData = {
  name: 'Test User',
  email: 'test@example.com',
  subject: 'Test Subject',
  message: 'This is a test message'
};

console.log('🧪 Test de l\'API de contact...\n');
console.log('📤 Données envoyées:');
console.log(JSON.stringify(testData, null, 2));
console.log('\n');

async function testContactAPI() {
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log(`📊 Status: ${response.status} ${response.statusText}`);
    
    const result = await response.json();
    
    if (!response.ok) {
      console.log('\n❌ ERREUR:');
      console.log(JSON.stringify(result, null, 2));
      
      if (result.details) {
        console.log('\n🔍 Détails:');
        console.log(result.details);
      }
    } else {
      console.log('\n✅ SUCCÈS:');
      console.log(JSON.stringify(result, null, 2));
    }
    
  } catch (error) {
    console.error('\n❌ Erreur fatale:', error.message);
  }
}

testContactAPI();
