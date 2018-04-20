# comparing similarity between face
aws rekognition compare-faces \
--source-image '{"S3Object":{"Bucket":"aws-ai-workshop","Name":"rekognition-images/gal-gadot.jpg"}}' \
--target-image '{"S3Object":{"Bucket":"aws-ai-workshop","Name":"rekognition-images/gal-gadot1.jpg"}}' \
--region us-east-1