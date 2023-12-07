const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");

const handler = async (event, context) => {
  console.log(event.Records[0].Sns.Message);
  const client = new S3Client();

  const params = {
    /** input parameters */
    Bucket: "localstack-packages",
  };

  const command = new ListObjectsCommand(params);

  try {
    const data = await client.send(command);
    // process data.
    console.log(data);
  } catch (error) {
    // error handling.
    console.error(error);
  }
};

module.exports = {
  handler,
};
