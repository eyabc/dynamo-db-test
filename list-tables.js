const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1',
});

const dynamodb = new AWS.DynamoDB();

const callback = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
};

dynamodb.listTables({}, callback);

dynamodb.updateTable({
  TableName: 'td_notes_sdk',
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 1
  }
}, callback);
