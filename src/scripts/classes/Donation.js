class Donation {
    constructor(amount, donorName, donorEmail) {
        this.amount = amount;
        this.donorName = donorName;
        this.donorEmail = donorEmail;
    }

    static validateDonationData(donationData) {
        const DonationSchema = {
            amount: 'number',
            donorName: 'string',
            donorEmail: 'string'
        };

        for (let key in DonationSchema) {
            if (typeof donationData[key] !== DonationSchema[key]) {
                return false;
            }
        }
        return true;
    }

    processDonation() {
        if (!Donation.validateDonationData(this)) {
            throw new Error('Invalid donation data');
        }

        // Code to process donation using PayPal API goes here
    }
}

export default Donation;