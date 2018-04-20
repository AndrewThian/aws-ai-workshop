# Description
This is my tiny resource of aws rekognition implementation..
- CLI-implementation is a bash script of

## How to use?
1. export your aws profile
  > `export AWS_PROFILE=<myprofile>`

2. define your own S3 buckets!
  > `S3Objects: <mybucket>`

## Gotchas
- Can't run script(`./<filename>`)?
    - run `chmod +x <filename>` to give permission

## Reference
- aws-sdk javascript: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Rekognition.html#detectFaces-property