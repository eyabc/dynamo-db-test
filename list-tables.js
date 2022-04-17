const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1',
});

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

const callback = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
};

const TD_NOTES_TABLE_NAME = 'td_notes';

docClient.batchWrite({
  RequestItems: {
    [TD_NOTES_TABLE_NAME]: [
      {
        DeleteRequest: {
          Key: {
            user_id: 'd923lf',
            timestamp: 1649690707,
          },
        },
      },
      {
        PutRequest: {
          Item: {
            user_id: 'ey',
            timestamp: 123,
            title: 'title 123',
            content: 'content 123',
          },
        }
      },
      {
        PutRequest: {
          Item: {
            user_id: 'ey',
            timestamp: 1234,
            title: 'title 1234',
            content: 'content 1234',
          },
        },
      },
    ],
  },
}, callback);
