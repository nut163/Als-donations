const ALSInfo = require('../js/classes/ALSInformation');
const ALSSchema = require('../schemas/ALSSchema');

exports.fetchALSInfo = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        const alsInfo = await ALSInfo.find();
        if (!alsInfo) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'ALS Information not found' }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ ALSInfo: alsInfo }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error fetching ALS Information' }),
        };
    }
};

exports.ALSInfoUpdate = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        const data = JSON.parse(event.body);
        const alsInfo = await ALSInfo.findByIdAndUpdate(data.id, data, { new: true });

        return {
            statusCode: 200,
            body: JSON.stringify({ ALSInfo: alsInfo, message: 'ALS Information updated successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error updating ALS Information' }),
        };
    }
};