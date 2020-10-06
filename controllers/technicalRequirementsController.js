const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { technicalRequirements } = require('../models')
const dbQueries = require('../utils/dbQueries')
const technicalRequirementsController = module.exports
const log = logger.getLogger('technicalRequirementsController')

technicalRequirementsController.listTechnicalRequirements = async (req, res) => {

let where = req.query
if (Object.keys(where).length === 0) {
    where = {}
}
log.info(`listTechnicalRequirements ${JSON.stringify(where)} `)
const technicalRequirements = await dbQueries.select('technical_requirements', where)
res.json(technicalRequirements)
}

technicalRequirementsController.createTechnicalRequirements = async (req, res) => {
  const { body } = req
  log.info(`createTechnicalRequirements body=${JSON.stringify(body)} `)
  const errors = isValid(body,technicalRequirements.technicalRequirementsSchema)
  if(errors.length){
    log.error(`createTechnicalRequirements invalid body `)
      res.status(BAD_REQUEST).json({error: errors})
  }
  dbQueries.insert('technical_requirements', body)
  
  res.sendStatus(CREATED)
}

technicalRequirementsController.deleteTechnicalRequirements = async (req, res) => {
  const { id } = req.query
  log.info(`deleteTechnicalRequirements id=${id} `)
  const del = await dbQueries.delete('technical_requirements', id)
  res.json(del)
}

technicalRequirementsController.updateTechnicalRequirements = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updateTechnicalRequirements id=${id} body=${JSON.stringify(body)}`)
  
  const errors = isValid(body,technicalRequirements.technicalRequirementsSchemaUpdate)
  if(errors.length){
    log.error(`updateTechnicalRequirements invalid body `)
      res.status(400).json({error: errors})
  }
  
  const upd = await dbQueries.update('technical_requirements', id, body)
  res.json(upd)
}
