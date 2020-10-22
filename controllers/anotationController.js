const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { anotation } = require('../models')
const dbQueries = require('../utils/dbQueries')
const anotationController = module.exports
const log = logger.getLogger('anotationController')

anotationController.listAnotation = async (req, res) => {

let where = req.query
if (Object.keys(where).length === 0) {
    where = {}
}
log.info(`listAnotation ${JSON.stringify(where)} `)
const anotation = await dbQueries.select('anotation', where)
res.json(anotation)
}

anotationController.createAnotation = async (req, res) => {
  const { body } = req
  log.info(`createAnotation body=${JSON.stringify(body)} `)
  const errors = isValid(body,anotation.anotationSchema)
  if(errors.length){
    log.error(`createAnotation invalid body `)
      res.status(BAD_REQUEST).json({error: errors})
  }
  const newAnotation = await dbQueries.insert('anotation', body)
  log.info(`anotation created with id=${newAnotation}`)
  res.status(CREATED).json({
    id: newAnotation[0]
  })
}

anotationController.deleteAnotation = async (req, res) => {
  const { id } = req.query
  log.info(`deleteAnotation id=${id} `)
  const del = await dbQueries.delete('anotation', id)
  res.json(del)
}

anotationController.updateAnotation = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updateAnotation id=${id} body=${JSON.stringify(body)}`)
  
  const errors = isValid(body,anotation.anotationSchemaUpdate)
  if(errors.length){
    log.error(`updateAnotation invalid body `)
      res.status(400).json({error: errors})
  }
  
  const upd = await dbQueries.update('anotation', id, body)
  res.json(upd)
}
