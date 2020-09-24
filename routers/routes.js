const express = require('express')
const { OK } = require('http-status-codes')

const wrap = require('../wrap.js')
const { routers } = require('../constants')

const { generalController, metadataController, filesController } = require('../controllers')

const router = express.Router()

router.get(routers.GENERAL, wrap(generalController.listGeneral))

router.post(routers.GENERAL, wrap(generalController.createGeneral))

router.put(routers.GENERAL, wrap(generalController.updateGeneral))

router.delete(routers.GENERAL, wrap(generalController.deleteGeneral))


router.get(routers.METADATA, wrap(metadataController.listMetadata))

router.post(routers.METADATA, wrap(metadataController.createMetadata))

router.put(routers.METADATA, wrap(metadataController.updateMetadata))

router.delete(routers.METADATA, wrap(metadataController.deleteMetadata))

router.post(routers.FILES, wrap(filesController.createFiles))

router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
  }))

  router.get('purebaci', wrap(async (req, res) => {
    res.status(OK).json({ message: 'todo ok en ci' })
  }))

module.exports = router