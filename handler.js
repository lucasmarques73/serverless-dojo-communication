'use strict';

const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports.createUser = async (event) => {
  const { body } = event;
  const { email } = JSON.parse(body);

  const params = {
    TableName: 'usersTable',
    Item: {
      email,
    },
  };

  await documentClient.put(params).promise();

  console.log("TESTE");

  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
