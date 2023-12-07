## Send SNS message
awslocal sns publish --topic-arn arn:aws:sns:us-east-1:000000000000:local-notification-topic \
--message '{ "headers":"ce9fd968-9b61-46b3-af4a-a66513dc82b7" }' \
--output json | cat

## Tail Lambda function logs
awslocal logs tail /aws/lambda/TestService-local-main --follow