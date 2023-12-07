const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");

const handler = async (event, context) => {
  console.log(event.Records[0].Sns.Message);
  const client = new S3Client();

  const params = {
    /** input parameters */
  };

  const command = new ListBucketsCommand(params);

  try {
    const data = await client.send(command);
    // process data.
    console.log(data.Buckets);
  } catch (error) {
    // error handling.
    console.error(error);
  }
};

module.exports = {
  handler,
};
