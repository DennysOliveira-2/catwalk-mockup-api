import aws from 'aws-sdk';
import crypto from 'crypto';
import { promisify } from 'util';

class ProvideSecureS3URLService {
    async execute() {

        const randomBytes = promisify(crypto.randomBytes);

        const region = "sa-east-1";
        const bucketName = "dennysm-ctwlk-sl";
        const accessKeyId = process.env.BUCKET_ACCESS;
        const secretAccessKey = process.env.BUCKET_SECRET;


        const s3 = new aws.S3({
            region,
            accessKeyId,
            secretAccessKey,
            signatureVersion: 'v4'
        })

        const rawBytes = await randomBytes(16);
        const imageName = rawBytes.toString('hex');

        const params = ({
            Bucket: bucketName,
            Key: imageName,
            Expires: 60
        })

        const uploadURL = await s3.getSignedUrlPromise('putObject', params);
        return uploadURL;
    }
}

export { ProvideSecureS3URLService };