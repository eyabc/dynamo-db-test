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
docClient.delete({
  TableName: TD_NOTES_TABLE_NAME,
  Key: {
    user_id: 'eunyoung',
    timestamp: 1
  },
}, callback)
