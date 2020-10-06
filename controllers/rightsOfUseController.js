const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { rightsOfUse } = require('../models')
const dbQueries = require('../utils/dbQueries')
const rightsOfUseController = module.exports
const log = logger.getLogger('rightsOfUseController')

rightsOfUseController.listRightsOfUse = async (req, res) => {

let where = req.query
if (Object.keys(where).length === 0) {
    where = {}
}
log.info(`listRightsOfUse ${JSON.stringify(where)} `)
const rightsOfUse = await dbQueries.select('rights_of_use', where)
res.json(rightsOfUse)
}

rightsOfUseController.createRightsOfUse = async (req, res) => {
  const { body } = req
  log.info(`createRightsOfUse body=${JSON.stringify(body)} `)
  const errors = isValid(body,rightsOfUse.rightsOfUseSchema)
  if(errors.length){
    log.error(`createRightsOfUse invalid body `)
      res.status(BAD_REQUEST).json({error: errors})
  }
  dbQueries.insert('rights_of_use', body)
  
  res.sendStatus(CREATED)
}

rightsOfUseController.deleteRightsOfUse = async (req, res) => {
  const { id } = req.query
  log.info(`deleteRightsOfUse id=${id} `)
  const del = await dbQueries.delete('rights_of_use', id)
  res.json(del)
}

rightsOfUseController.updateRightsOfUse = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updateRightsOfUse id=${id} body=${JSON.stringify(body)}`)
  
  const errors = isValid(body,rightsOfUse.rightsOfUseSchema)
  if(errors.length){
    log.error(`updateRightsOfUse invalid body `)
      res.status(400).json({error: errors})
  }
  
  const upd = await dbQueries.update('rights_of_use', id, body)
  res.json(upd)
}
