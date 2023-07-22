const DonationSchema = require('../schemas/DonationSchema');

exports.handleDonation = async (event, context) => {
    const { donationAmount } = JSON.parse(event.body);

    // Validate donation amount
    if (!donationAmount) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'donationFailure', details: 'Donation amount is required' }),
        };
    }

    // Create new donation
    const donation = new DonationSchema({
        donationAmount,
    });

    try {
        // Save donation
        const savedDonation = await donation.save();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'donationSuccess', donation: savedDonation }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'donationFailure', details: error.message }),
        };
    }
};