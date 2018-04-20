const RekogService = require('../aws-defaults')

const params = {
    SourceImage: {
        S3Object: {
            Bucket: "aws-ai-workshop",
            Name: "rekognition-images/gal-gadot.jpg"
        }
    },
    TargetImage: {
        S3Object: {
            Bucket: "aws-ai-workshop",
            Name: "rekognition-images/gal-gadot1.jpg"
        }
    }
}

RekogService.compareFaces(params, (err, data) => {
    if (err) console.log(err)
    else console.log(data)
})


