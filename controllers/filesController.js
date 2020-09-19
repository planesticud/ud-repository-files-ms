const { CREATED, BAD_REQUEST } = require('http-status-codes')

const logger = require('../utils/logger')
const { uploadFile } = require('../utils/s3')
const filesController = module.exports
const log = logger.getLogger('filesController')

filesController.listFiles = async (req, res) => {

    res.json('ok')
}

filesController.createFiles = async (req, res) => {
    log.info('createFiles')
   
    if(req.files){
        const file = req.files.file
        log.info(`upload file=${file.name}`)
        await file.mv(`./tmp/${file.name}`)
        const url = uploadFile(file.name)
        log.info(`upload file to s3=${url}`)
        res.json({url: url})
    }else{
        log.error('file not found')
        res.status(400).json({error: 'file_not_found'})
    }
    
}
