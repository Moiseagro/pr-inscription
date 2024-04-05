document.addEventListener('DOMContentLoaded', function() {
  var whatsappBtn = document.getElementById('submit-btn');

  // Ajouter un gestionnaire d'événements de changement au sélecteur de moyen de paiement
  document.getElementById('payment').addEventListener('change', function() {
    updatePaymentAddress();
  });

  // Fonction pour mettre à jour l'adresse du moyen de paiement
  function updatePaymentAddress() {
    var payment = document.getElementById('payment').value;
    var paymentAddressText;

    // Déterminer l'adresse du moyen de paiement en fonction du choix
    switch (payment) {
      case 'orange_money':
        paymentAddressText = '+22657547436 (Orange Burkina, Wend Lassida Ismaêl Moïse Compaoré)';
        break;
      case 'wave':
        paymentAddressText = '+22657547436 (Wend Lassida Ismaêl Moïse Compaoré)';
        break;
      case 'moov_money':
        paymentAddressText = '+22601368949 (Wend Lassida Ismaêl Moïse Compaoré)';
        break;
      case 'moov_money_flooz':
        paymentAddressText = '+22601368949 (Moov Burkina, Wend Lassida Ismaêl Moïse Compaoré)';
        break;
      case 'mtn':
        paymentAddressText = '+22657547436 (Orange Burkina, Wend Lassida Ismaêl Moïse Compaoré)';
        break;
      case 'nita':
        paymentAddressText = 'Burkina Faso, Bobo-Dioulasso, à Moïse Compaoré au +22657547436';
        break;
      default:
        paymentAddressText = 'Adresse de paiement par défaut';
        break;
    }

    // Mettre à jour le texte de l'adresse du moyen de paiement
    document.getElementById('payment_address').value = paymentAddressText;
  }

  // Appeler la fonction updatePaymentAddress au chargement de la page pour initialiser l'adresse du moyen de paiement
  updatePaymentAddress();

  // Fonction pour envoyer le message WhatsApp
function sendWhatsAppMessage() {
  // Récupérer les valeurs de tous les champs du formulaire
  var session = document.getElementById('session').value;
  var price = document.querySelector('input[name="price"]:checked').value;
  var payment = document.getElementById('payment').value;
  var paymentAddress = document.getElementById('payment_address').value;
  var nom = document.getElementById('nom').value;
  var prenom = document.getElementById('prenom').value;
  var whatsapp = document.getElementById('whatsapp').value;

  // Construire le message WhatsApp en concaténant toutes les réponses
  var whatsappMessage = '*Préinscription* :\n\n' +
                        '*Nom* : ' + nom +
                        '\n*Prénom* : ' + prenom +
                        '\n*Numéro WhatsApp* : ' + whatsapp +
                        '\n\n*Session choisie* :\n' + session +
                        '\n\n*Prix choisi* :\n' + price +
                        '\n\n*Mode de paiement* :\n' + payment +
                        '\n\n*Adresse du moyen de paiement* :\n' + paymentAddress;

  // Créer le lien WhatsApp avec le message pré-rempli
  var whatsappLink = 'https://wa.me/message/DJNWKADUL744A1?text=' + encodeURIComponent(whatsappMessage);

  // Ouvrir une nouvelle fenêtre pour envoyer le message WhatsApp
  window.open(whatsappLink);
}

  // Ajouter un gestionnaire d'événements au clic sur le bouton d'envoi
  whatsappBtn.addEventListener('click', sendWhatsAppMessage);
});
