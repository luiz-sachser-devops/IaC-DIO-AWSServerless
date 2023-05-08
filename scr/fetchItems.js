"use strict";
const AWS = require("aws-sdk");

const fetchItems = async (event) => {
  //module.exports.fetchItem = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const {id} = event.pathParameters

    let items;

    try {
        const result = await dynamodb.scan({
            TableName: "ItemTableNew",
        }).promise();

        items = result.Items;

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items),
    };
};

module.exports = {
    handler: fetchItems,
};