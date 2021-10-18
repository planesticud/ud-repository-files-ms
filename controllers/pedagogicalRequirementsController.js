const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { isValid } = require('../utils/validate')

const logger = require('../utils/logger')
const { pedagogicalRequirements } = require('../models')
const dbQueries = require('../utils/dbQueries')
const pedagogicalRequirementsController = module.exports
const log = logger.getLogger('pedagogicalRequirementsController')

pedagogicalRequirementsController.contarListPedagogicalRequirements = async (req, res) => {

  let where = req.query
  if (Object.keys(where).length === 0) {
      where = {}
  }
  log.info(`listPedagogicalRequirements ${JSON.stringify(where)} `)
  const pedagogicalRequirements = (await dbQueries.select('pedagogical_requirements', where)).length
  res.json(pedagogicalRequirements)
  }

pedagogicalRequirementsController.listPedagogicalRequirements = async (req, res) => {

let where = req.query
if (Object.keys(where).length === 0) {
    where = {}
}
log.info(`listPedagogicalRequirements ${JSON.stringify(where)} `)
const pedagogicalRequirements = await dbQueries.select('pedagogical_requirements', where)
res.json(pedagogicalRequirements)
}

pedagogicalRequirementsController.createPedagogicalRequirements = async (req, res) => {
  const { body } = req
  log.info(`createPedagogicalRequirements body=${JSON.stringify(body)} `)
  const errors = isValid(body,pedagogicalRequirements.pedagogicalRequirementsSchema)
  if(errors.length){
    log.error(`createPedagogicalRequirements invalid body `)
      res.status(BAD_REQUEST).json({error: errors})
  }
  const newPedagogicalRequirements = await dbQueries.insert('pedagogical_requirements', body)
  log.info(`pedagogical_requirements created with id=${newPedagogicalRequirements}`)
  res.status(CREATED).json({
    id: newPedagogicalRequirements[0]
  })
}

pedagogicalRequirementsController.deletePedagogicalRequirements = async (req, res) => {
  const { id } = req.query
  log.info(`deletePedagogicalRequirements id=${id} `)
  const del = await dbQueries.delete('pedagogical_requirements', id)
  res.json(del)
}

pedagogicalRequirementsController.updatePedagogicalRequirements = async (req, res) => {
  const { body } = req
  const { id } = req.query
  log.info(`updatePedagogicalRequirements id=${id} body=${JSON.stringify(body)}`)
  
  const errors = isValid(body,pedagogicalRequirements.pedagogicalRequirementsSchema)
  if(errors.length){
    log.error(`updatePedagogicalRequirements invalid body `)
      res.status(400).json({error: errors})
  }
  
  const upd = await dbQueries.update('pedagogical_requirements', id, body)
  res.json(upd)
}
