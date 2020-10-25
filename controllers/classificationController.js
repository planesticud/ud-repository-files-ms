const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { classification } = require('../models')
const dbQueries = require('../utils/dbQueries')
const classificationController = module.exports
const log = logger.getLogger('classificationController')

classificationController.listClassification = async (req, res) => {

let where = req.query
if (Object.keys(where).length === 0) {
    where = {}
}
log.info(`listClassification ${JSON.stringify(where)} `)
const classification = await dbQueries.select('classification', where)
res.json(classification)
}

classificationController.createClassification = async (req, res) => {
  const { body } = req
  log.info(`createClassification body=${JSON.stringify(body)} `)
  const errors = isValid(body,classification.classificationSchema)
  if(errors.length){
    log.error(`createClassification invalid body `)
      res.status(BAD_REQUEST).json({error: errors})
  }
  const newClassification = await dbQueries.insert('classification', body)
  log.info(`classification created with id=${newClassification}`)
  res.status(CREATED).json({
    id: newClassification[0]
  })
}

classificationController.deleteClassification = async (req, res) => {
  const { id } = req.query
  log.info(`deleteClassification id=${id} `)
  const del = await dbQueries.delete('classification', id)
  res.json(del)
}

classificationController.updateClassification = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updateClassification id=${id} body=${JSON.stringify(body)}`)
  
  const errors = isValid(body,classification.classificationSchema)
  if(errors.length){
    log.error(`updateClassification invalid body `)
      res.status(400).json({error: errors})
  }
  
  const upd = await dbQueries.update('classification', id, body)
  res.json(upd)
}
