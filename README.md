# s3photoalbum

A React-based S3 Photo Album

### Explanation

The album app expects a json file 'data/index.json' defining the app name, album structure, and the photos in each album, that looks like the following:
```
{
    "title": "TITLE OF THE APP",
    "albums": [
        {
            "title": "TITLE OF THE ALBUM",
            "header": "THUMBNAIL IMAGE FOR THE ALBUM",
            "photos": [
                {
                    "name": "FILENAME OF THE PHOTO WITHOUT EXTENSION",
                    "title": "TITLE OF THE PHOTO"
                }
            ]
        }
    ]
}
```

### CloudFormation AWS Helper Scripts

Build the Cert with ACM in us-east-1:
```
aws cloudformation deploy --stack-name cert-photos-mydomain-com --template-file awsACM.yaml --parameter-overrides DomainName=photos.mydomain.com ZoneID=<ZONE ID from Route53> --region us-east-1
```
Build the S3 Bucket, CloudFront CDN:
```
aws cloudformation deploy --stack-name photos-mydomain-com --template-file awsS3Cloudfront.yaml --parameter-overrides CertificateARN=arn:aws:acm:us-east-1:[ACCOUNT_ID]:certificate/[ID] DomainName=photos.mydomain.com HostedZoneName=mydomain.com
```