const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    switch (event.httpMethod) {
        case 'GET':
            return fetchNonProfitDetails();
        case 'POST':
            return updateNonProfitDetails(event);
        default:
            return sendResponse(405, `Method ${event.httpMethod} not allowed`);
    }
};

const fetchNonProfitDetails = async () => {
    const params = {
        TableName: 'NonProfitDetails',
    };

    try {
        const data = await dynamoDB.scan(params).promise();
        return sendResponse(200, data.Items);
    } catch (err) {
        console.log(err);
        return sendResponse(500, 'Error fetching non-profit details');
    }
};

const updateNonProfitDetails = async (event) => {
    const item = JSON.parse(event.body);

    const params = {
        TableName: 'NonProfitDetails',
        Item: item
    };

    try {
        await dynamoDB.put(params).promise();
        return sendResponse(200, 'Non-profit details updated successfully');
    } catch (err) {
        console.log(err);
        return sendResponse(500, 'Error updating non-profit details');
    }
};

const sendResponse = (statusCode, message) => {
    const response = {
        statusCode: statusCode,
        body: JSON.stringify(message),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

    return response;
};