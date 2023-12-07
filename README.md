aws sns publish --endpoint-url=http://localhost:4566 --region=us-east-1 --topic-arn arn:aws:sns:us-east-1:000000000000:local-notification-topic \
--message '{ "headers":"ce9fd968-9b61-46b3-af4a-a66513dc82b7" }' \
--output json | cat

awslocal logs tail /aws/lambda/TestService-local-main --region=us-east-1 --follow