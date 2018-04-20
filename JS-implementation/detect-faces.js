const RekogService = require('../aws-defaults')

const params = {
    Image: {
        S3Object: {
            Bucket: "aws-ai-workshop",
            Name: "rekognition-images/female.jpg"
        }
    },
    Attributes: [
        "ALL"
    ]
}

RekogService.detectFaces(params, (err, data) => {
    if (err) console.log(err)
    else console.log(data)
})