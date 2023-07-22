import Donation from './classes/Donation.js';
import ALSInformation from './classes/ALSInformation.js';
import NonProfitOrganization from './classes/NonProfitOrganization.js';
import PaypalIntegration from './classes/PaypalIntegration.js';

document.addEventListener('DOMContentLoaded', () => {
    const donationForm = document.getElementById('donationForm');
    const ALSInfoSection = document.getElementById('ALSInfoSection');
    const nonProfitDetailsSection = document.getElementById('nonProfitDetailsSection');
    const paypalButton = document.getElementById('paypalButton');

    const donation = new Donation();
    const alsInformation = new ALSInformation();
    const nonProfitOrganization = new NonProfitOrganization();
    const paypalIntegration = new PaypalIntegration();

    donationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const donationAmount = event.target.elements.donationAmount.value;
        donation.handleDonation(donationAmount)
            .then((message) => {
                if (message === 'donationSuccess') {
                    alert('Thank you for your donation!');
                } else {
                    alert('Donation failed. Please try again.');
                }
            });
    });

    paypalButton.addEventListener('click', () => {
        paypalIntegration.initiatePaypal();
    });

    alsInformation.fetchALSInfo()
        .then((ALSInfo) => {
            ALSInfoSection.innerHTML = ALSInfo;
        });

    nonProfitOrganization.fetchNonProfitDetails()
        .then((nonProfitDetails) => {
            nonProfitDetailsSection.innerHTML = nonProfitDetails;
        });
});