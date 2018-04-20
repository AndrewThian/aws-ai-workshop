# detecting faces and the orientation
aws rekognition detect-faces \
--image '{"S3Object":{"Bucket":"aws-ai-workshop","Name":"rekognition-images/female.jpg"}}' \
--region us-east-1 \
--attributes ALL