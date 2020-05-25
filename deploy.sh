#!/bin/bash

# DEPLOY FRONTEND TO AWS S3

AWS_S3_REGION="eu-west-2"
# CLOUDFRONT_DIST_ID=$CLOUDFRONT_DIST_ID_STAGING
# the command that builds your app
cd ./client
npm run build

# Build the name of the S3 bucket we want to deploy to
S3_BUCKET="portfolio-react-app"
echo "Deploying to the $S3_BUCKET bucket"

# Install the AWS CLI so we can publish to S3
pip install --upgrade pip --user
pip install awscli --upgrade --user

aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
aws configure set default.region eu-west-2

# Sync our build folder with our S3 bucket
# --acl public-read says deploy the files with public read access
# --delete says to delete files in the bucket that aren't present in the build folder
#   this ensures that old assets built with webpack with hashed names get deleted
#   when a new build of the app is made and the assets get new hash names
aws s3 sync build/ "s3://$S3_BUCKET" --acl public-read --delete

# Force-invalidate the now-outdated assets rather than waiting for them to expire
# Make sure you have the CLOUDFRONT_DIST_ID_* env variables defined for this to work
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DIST_ID --paths /*




# DEPLOY BACKEND TO AWS ELASTIC BEANSTALK

cd ../backend
EB_APP="portfolio"
EB_ENV="portfolio-backend-prod"
echo "Deploying to $EB_ENV"

pip install --upgrade pip --user
sudo python -m easy_install --upgrade pyOpenSSL
pip install awscli --upgrade --user
pip install --user --upgrade awsebcli

# Configure AWS credentials for Elastic Beanstalk
echo 'HEREEEEEEEEEEEEEEEEEEEEEEE'
mkdir -p ~/.aws
echo '[profile eb-cli]' > ~/.aws/config
echo "aws_access_key_id = $AWS_ACCESS_KEY_ID" >> ~/.aws/config
echo "aws_secret_access_key = $AWS_SECRET_ACCESS_KEY" >> ~/.aws/config
eb status $EB_ENV

echo 'NOW HEREEEEEEEEEEEEEEEEEEEEEEE'
# Deploy application to the appropriate ElasticBeanstalk env
eb deploy $EB_ENV -v || exit 1
rm ~/.aws/config