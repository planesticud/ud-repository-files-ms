const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { metametadata } = require('../models')
const dbQueries = require('../utils/dbQueries')
const metametadataController = module.exports
const log = logger.getLogger('metametadataController')

metametadataController.contarListMetametadata = async (req, res) => {

  let where = req.query
  if (Object.keys(where).length === 0) {
      where = {}
  }
  log.info(`listMetametadata ${JSON.stringify(where)} `)
  const metametadata = (await dbQueries.select('metametadata', where)).length
  res.json(metametadata)
  }

metametadataController.listMetametadata = async (req, res) => {

let where = req.query
if (Object.keys(where).length === 0) {
    where = {}
}
log.info(`listMetametadata ${JSON.stringify(where)} `)
const metametadata = await dbQueries.select('metametadata', where)
res.json(metametadata)
}

metametadataController.createMetametadata = async (req, res) => {
  const { body } = req
  log.info(`createMetametadata body=${JSON.stringify(body)} `)
  const errors = isValid(body,metametadata.metametadataSchema)
  if(errors.length){
    log.error(`createMetametadata invalid body `)
      res.status(BAD_REQUEST).json({error: errors})
  }
  const newMetametadata = await dbQueries.insert('metametadata', body)
  log.info(`metametadata created with id=${newMetametadata}`)
  res.status(CREATED).json({
    id: newMetametadata[0]
  })
}

metametadataController.deleteMetametadata = async (req, res) => {
  const { id } = req.query
  log.info(`deleteMetametadata id=${id} `)
  const del = await dbQueries.delete('metametadata', id)
  res.json(del)
}

metametadataController.updateMetametadata = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updateMetametadata id=${id} body=${JSON.stringify(body)}`)
  
  const errors = isValid(body,metametadata.metametadataSchema)
  if(errors.length){
    log.error(`updateMetametadata invalid body `)
      res.status(400).json({error: errors})
  }
  
  const upd = await dbQueries.update('metametadata', id, body)
  res.json(upd)
}
