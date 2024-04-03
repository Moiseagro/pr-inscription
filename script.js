document.addEventListener('DOMContentLoaded', function() {
  var whatsappBtn = document.getElementById('submit-btn');
  whatsappBtn.addEventListener('click', function() {
    var session = document.getElementById('session').value;
    var price = document.querySelector('input[name="price"]:checked').value;
    var payment = document.getElementById('payment').value;
    var paymentNumber = document.getElementById('payment_number').value;
    var paymentAddress = document.getElementById('payment_address').value;
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var whatsapp = document.getElementById('whatsapp').value;

    // Mettre à jour l'adresse de paiement en fonction du moyen de paiement sélectionné
    if (payment === 'orange_money') {
      paymentAddress = '+22657547436 (Wend Lassida Ismael Moise Compaore)';
    } else if (payment === 'wave') {
      paymentAddress = '+22657547436';
    } else if (payment === 'moov_money') {
      paymentAddress = '+22601368949 (Moise Compaoré)';
    } else if (payment === 'mtn') {
      paymentAddress = '+22657547436 (Orange Burkina)';
    } else if (payment === 'nita') {
      paymentAddress = 'Burkina Faso, Bobo-Dioulasso, à Moïse Compaoré';
    }

    var whatsappMessage = '*Session choisie* :\n' + session +
                          '\n\n*Prix choisi* :\n' + price +
                          '\n\n*Mode de paiement* :\n' + payment +
                          '\n\n*Numéro de paiement* :\n' + paymentNumber +
                          '\n\n*Adresse du moyen de paiement* :\n' + paymentAddress +
                          '\n\n*Nom* :\n' + nom +
                          '\n\n*Prénom* :\n' + prenom +
                          '\n\n*Numéro WhatsApp* :\n' + whatsapp;

    var whatsappLink = 'https://wa.me/22601368949?text=' + encodeURIComponent(whatsappMessage);
    window.open(whatsappLink);
  });
});

// Fonction pour mettre à jour l'adresse de paiement
function updatePaymentAddress() {
  var payment = document.getElementById('payment').value;
  var paymentAddressInput = document.getElementById('payment_address');
  var defaultAddress = '+22657547436 (Wend Lassida Ismael Moise Compaore)';
  
  if (payment === 'orange_money') {
    paymentAddressInput.value = defaultAddress;
  } else if (payment === 'wave') {
    paymentAddressInput.value = '+22657547436';
  } else if (payment === 'moov_money') {
    paymentAddressInput.value = '+22601368949 (Moise Compaoré)';
  } else if (payment === 'mtn') {
    paymentAddressInput.value = '+22657547436 (Orange Burkina)';
  } else if (payment === 'nita') {
    paymentAddressInput.value = 'Burkina Faso, Bobo-Dioulasso, à Moïse Compaoré';
  }
}
