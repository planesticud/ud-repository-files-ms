const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { metadata } = require('../models')
const dbQueries = require('../utils/dbQueries')
const metadataController = module.exports
const log = logger.getLogger('metadataController')

metadataController.contarListMetadata = async (req, res) => {

  let where = req.query
  if (Object.keys(where).length === 0) {
      where = {}
  }
  log.info(`listMetadata ${JSON.stringify(where)} `)
  const metadata = (await dbQueries.select('metadata', where)).length
  res.json(metadata)
  }

metadataController.listMetadata = async (req, res) => {

let where = req.query
if (Object.keys(where).length === 0) {
    where = {}
}
log.info(`listMetadata ${JSON.stringify(where)} `)
const metadata = await dbQueries.select('metadata', where)
res.json(metadata)
}

metadataController.createMetadata = async (req, res) => {
  const { body } = req
  log.info(`createMetadata body=${JSON.stringify(body)} `)
  const errors = isValid(body,metadata.metadataSchema)
  if(errors.length){
    log.error(`createMetadata invalid body `)
      res.status(BAD_REQUEST).json({error: errors})
  }
  const newMetadata = await dbQueries.insert('metadata', body)
  log.info(`metadata created with id=${newMetadata}`)
  res.status(CREATED).json({
    id: newMetadata[0]
  })
}

metadataController.deleteMetadata = async (req, res) => {
  const { id } = req.query
  log.info(`deleteMetadata id=${id} `)
  const del = await dbQueries.delete('metadata', id)
  res.json(del)
}

metadataController.updateMetadata = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updateMetadata id=${id} body=${JSON.stringify(body)}`)
  
  const upd = await dbQueries.update('metadata', id, body)
  res.json(upd)
}
