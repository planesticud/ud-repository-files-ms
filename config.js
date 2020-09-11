const { 
    PORT,
    BUCKET_NAME,
    ACL,
    URL_S3_BASE
} = process.env

module.exports = {
    port: PORT,
    bucketName: BUCKET_NAME,
    acl: ACL,
    urlS3Base: URL_S3_BASE
}