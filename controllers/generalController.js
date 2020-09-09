const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { general } = require('../models')
const dbQueries = require('../utils/dbQueries')
const generalController = module.exports
const log = logger.getLogger('generalController')

generalController.listGeneral = async (req, res) => {

let where = req.query
if (Object.keys(where).length === 0) {
    where = {}
}
log.info(`listGeneral ${JSON.stringify(where)} `)
const general = await dbQueries.select('general', where)
res.json(general)
}

generalController.createGeneral = async (req, res) => {
  const { body } = req
  log.info(`createGeneral body=${JSON.stringify(body)} `)
  const errors = isValid(body,general.generalSchema)
  if(errors.length){
    log.error(`createGeneral invalid body `)
      res.status(BAD_REQUEST).json({error: errors})
  }
  dbQueries.insert('general', body)
  
  res.sendStatus(CREATED)
}

generalController.deleteGeneral = async (req, res) => {
  const { id } = req.query
  log.info(`deleteGeneral id=${id} `)
  const del = await dbQueries.delete('general', id)
  res.json(del)
}

generalController.updateGeneral = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updateGeneral id=${id} body=${JSON.stringify(body)}`)
  
  const errors = isValid(body,general.generalSchemaUpdate)
  if(errors.length){
    log.error(`updateGeneral invalid body `)
      res.status(400).json({error: errors})
  }
  
  const upd = await dbQueries.update('general', id, body)
  res.json(upd)
}
