const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'YOUR_CLIENT_ID',
  'client_secret': 'YOUR_CLIENT_SECRET'
});

exports.handler = async (event, context) => {
  const { donationAmount } = JSON.parse(event.body);

  const create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://return.url",
      "cancel_url": "http://cancel.url"
    },
    "transactions": [{
      "item_list": {
        "items": [{
          "name": "ALS Donation",
          "sku": "item",
          "price": donationAmount,
          "currency": "USD",
          "quantity": 1
        }]
      },
      "amount": {
        "currency": "USD",
        "total": donationAmount
      },
      "description": "Donation for ALS prevention"
    }]
  };

  return new Promise((resolve, reject) => {
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        reject({
          statusCode: 500,
          body: JSON.stringify({
            message: 'Paypal Integration Failed',
            error: error
          })
        });
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify({
            message: 'Paypal Integration Successful',
            payment: payment
          })
        });
      }
    });
  });
};