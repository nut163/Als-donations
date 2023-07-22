import { Donation } from './classes/Donation.js';
import { donateStyle } from '../styles/donate.css';

document.getElementById('donate-content').style = donateStyle;

const donation = new Donation();

document.getElementById('donate-button').addEventListener('click', () => {
    const amount = document.getElementById('donation-amount').value;
    const donorName = document.getElementById('donor-name').value;
    const donorEmail = document.getElementById('donor-email').value;

    donation.processDonation(amount, donorName, donorEmail)
        .then(message => {
            if (message === 'donationSuccess') {
                alert('Thank you for your donation!');
            } else if (message === 'donationFailure') {
                alert('There was an issue processing your donation. Please try again.');
            }
        });
});

function loadContent() {
    fetch('https://api.example.com/donate')
        .then(response => response.json())
        .then(data => {
            document.getElementById('donate-content').innerHTML = data.content;
        });
}

loadContent();