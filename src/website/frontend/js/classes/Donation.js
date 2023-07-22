class Donation {
    constructor(donationAmount) {
        this.donationAmount = donationAmount;
    }

    static validateDonation(donationAmount) {
        if (donationAmount <= 0) {
            throw new Error('Donation amount must be greater than 0');
        }
    }

    static displayDonationSuccess() {
        const messageElement = document.getElementById('donationSuccess');
        messageElement.style.display = 'block';
    }

    static displayDonationFailure() {
        const messageElement = document.getElementById('donationFailure');
        messageElement.style.display = 'block';
    }

    handleDonation() {
        try {
            Donation.validateDonation(this.donationAmount);
            Donation.displayDonationSuccess();
        } catch (error) {
            Donation.displayDonationFailure();
        }
    }
}

export default Donation;