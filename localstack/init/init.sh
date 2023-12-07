#!/bin/bash

set -x
echo "Initializing AWS services..."
awslocal sqs create-queue --queue-name my-queue-local.fifo --attributes FifoQueue=true
awslocal sns create-topic --name local-notification-topic
awslocal kms create-key
awslocal s3 mb s3://local-s3-deployment-bucket
set +x