const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { lifecycle } = require('../models')
const dbQueries = require('../utils/dbQueries')
const lifecycleController = module.exports
const log = logger.getLogger('lifecycleController')

lifecycleController.contarListLifecycle = async (req, res) => {

  let where = req.query
  if (Object.keys(where).length === 0) {
      where = {}
  }
  log.info(`listLifecycle ${JSON.stringify(where)} `)
  const lifecycle = (await dbQueries.select('lifecycle', where)).length
  res.json(lifecycle)
  }


lifecycleController.listLifecycle = async (req, res) => {

let where = req.query
if (Object.keys(where).length === 0) {
    where = {}
}
log.info(`listLifecycle ${JSON.stringify(where)} `)
const lifecycle = await dbQueries.select('lifecycle', where)
res.json(lifecycle)
}

lifecycleController.createLifecycle = async (req, res) => {
  const { body } = req
  log.info(`createLifecycle body=${JSON.stringify(body)} `)
  const errors = isValid(body,lifecycle.lifecycleSchema)
  if(errors.length){
    log.error(`createLifecycle invalid body `)
      res.status(BAD_REQUEST).json({error: errors})
  }
  const newLifeCycle = await dbQueries.insert('lifecycle', body)
  log.info(`lifecycle created with id=${newLifeCycle}`)
  res.status(CREATED).json({
    id: newLifeCycle[0]
  })
}

lifecycleController.deleteLifecycle = async (req, res) => {
  const { id } = req.query
  log.info(`deleteLifecycle id=${id} `)
  const del = await dbQueries.delete('lifecycle', id)
  res.json(del)
}

lifecycleController.updateLifecycle = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updateLifecycle id=${id} body=${JSON.stringify(body)}`)
  
  const errors = isValid(body,lifecycle.lifecycleSchema)
  if(errors.length){
    log.error(`updateLifecycle invalid body `)
      res.status(400).json({error: errors})
  }
  
  const upd = await dbQueries.update('lifecycle', id, body)
  res.json(upd)
}
