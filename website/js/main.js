// Importing PayPal SDK
const paypal = require('paypal-rest-sdk');

// Configuring PayPal SDK
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'YOUR_CLIENT_ID',
  'client_secret': 'YOUR_CLIENT_SECRET'
});

// Function to process donation
function processDonation(amount) {
  const create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:3000/success",
      "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
      "item_list": {
        "items": [{
          "name": "ALS Donation",
          "sku": "001",
          "price": amount,
          "currency": "USD",
          "quantity": 1
        }]
      },
      "amount": {
        "currency": "USD",
        "total": amount
      },
      "description": "Donation for ALS prevention"
    }]
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      console.log(error);
      return;
    } else {
      for(let i = 0; i < payment.links.length; i++){
        if(payment.links[i].rel === 'approval_url'){
          window.location.href = payment.links[i].href;
        }
      }
    }
  });
}

// Event listener for donation button
document.getElementById('donateButton').addEventListener('click', function() {
  const donationAmount = document.getElementById('donationAmount').value;
  processDonation(donationAmount);
});