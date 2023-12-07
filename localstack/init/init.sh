#!/bin/bash

set -x
echo "Initializing AWS services..."
awslocal sns create-topic --name local-notification-topic
awslocal s3 mb s3://localstack-packages
set +x