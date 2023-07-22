class PaypalIntegration {
    constructor(paypalDetails) {
        this.paypalDetails = paypalDetails;
    }

    initiatePaypal() {
        paypal.Button.render({
            env: this.paypalDetails.env,
            client: {
                sandbox: this.paypalDetails.clientId,
                production: this.paypalDetails.clientId
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    transactions: [{
                        amount: {
                            total: donationAmount,
                            currency: 'USD'
                        }
                    }]
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function () {
                    document.getElementById('donationSuccess').style.display = 'block';
                }).catch(function () {
                    document.getElementById('donationFailure').style.display = 'block';
                });
            }
        }, '#paypalButton');
    }
}

export default PaypalIntegration;