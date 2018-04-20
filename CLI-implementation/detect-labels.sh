# detecting labels from scenes
aws rekognition detect-labels \
--image "S3Object={Bucket=aws-ai-workshop,Name=rekognition-images/bicycle.jpg}" \
--region us-east-1