# 📧 Configuration Brevo - Guide Complet

## 🔍 Diagnostic effectué

### Statut actuel
- ✅ Clé API Brevo : **Valide**
- ✅ Compte : ia.solution.monde@gmail.com
- ✅ Plan : Free (300 crédits restants)
- ❌ Email `contact@ia-solution.fr` : **NON VALIDÉ**
- ✅ Email `ia.solution.monde@gmail.com` : **VALIDÉ**

### Problème
Le code utilise `contact@ia-solution.fr` comme adresse d'envoi, mais cet email n'est pas validé dans Brevo. Brevo n'autorise l'envoi que depuis des emails validés.

---

## 🛠️ Solution 1 : Valider contact@ia-solution.fr (RECOMMANDÉ)

### Étapes :

1. **Connectez-vous à Brevo**
   - Allez sur : https://app.brevo.com/settings/senders

2. **Ajoutez le nouvel expéditeur**
   - Cliquez sur "Add a sender"
   - Entrez l'email : `contact@ia-solution.fr`
   - Entrez le nom : `IA-Solution`

3. **Validez l'email**
   - Brevo enverra un email de confirmation à `contact@ia-solution.fr`
   - Vérifiez votre boîte mail et cliquez sur le lien de validation
   - ⚠️ Vous devez avoir accès à cette boîte mail pour valider

4. **Vérifiez la validation**
   ```bash
   node scripts/test-brevo.js
   ```

### Avantages :
- ✅ Email professionnel avec votre domaine
- ✅ Meilleure image de marque
- ✅ Pas de modification de code nécessaire

---

## 🔧 Solution 2 : Utiliser l'email validé existant (RAPIDE)

Si vous n'avez pas accès à `contact@ia-solution.fr` pour le moment, utilisez l'email déjà validé.

### Modifications nécessaires :

#### 1. Fichier : `app/api/contact/route.ts`

Remplacez `contact@ia-solution.fr` par `ia.solution.monde@gmail.com` :

```typescript
// Ligne 36 - Auto-reply to user
sender: { email: 'ia.solution.monde@gmail.com', name: 'IA-Solution' },

// Ligne 54 - Internal notification
sender: { email: 'ia.solution.monde@gmail.com', name: 'IA-Solution Contact Form' },

// Ligne 55 - Destinataire de la notification interne
to: [{ email: 'ia.solution.monde@gmail.com', name: 'IA-Solution' }],
```

### Avantages :
- ✅ Fonctionne immédiatement
- ✅ Aucune configuration Brevo supplémentaire

### Inconvénients :
- ⚠️ Utilise un email Gmail au lieu d'un email professionnel
- ⚠️ Moins professionnel pour les clients

---

## 🧪 Tests

### Test rapide du formulaire :
```bash
node scripts/test-brevo.js
```

### Test réel d'envoi :
Décommentez les lignes 104-130 dans `scripts/test-brevo.js` puis :
```bash
node scripts/test-brevo.js
```

---

## 📊 Informations du compte

- **Compte Brevo** : ia.solution.monde@gmail.com
- **Plan actuel** : Free
- **Crédits restants** : 300 emails/jour
- **Emails validés** : 
  - ✅ ia.solution.monde@gmail.com
  - ❌ contact@ia-solution.fr (à valider)

---

## ⚠️ Important

### Limites du plan Free :
- 300 emails par jour
- Branding Brevo dans les emails
- Pas de support prioritaire

### Pour augmenter les limites :
- Passez à un plan payant sur https://app.brevo.com/settings/plan

---

## 🔗 Liens utiles

- **Dashboard Brevo** : https://app.brevo.com/
- **Gestion des expéditeurs** : https://app.brevo.com/settings/senders
- **Statistiques d'envoi** : https://app.brevo.com/statistics
- **Documentation API** : https://developers.brevo.com/

---

## 📞 Support

En cas de problème :
1. Vérifiez que la clé API est bien dans `.env.local`
2. Exécutez le script de diagnostic : `node scripts/test-brevo.js`
3. Vérifiez les logs du serveur Next.js
4. Contactez le support Brevo : https://help.brevo.com/

---

**Dernière mise à jour** : 12 novembre 2025
