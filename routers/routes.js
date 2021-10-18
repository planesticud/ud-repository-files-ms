const express = require('express')
const { OK } = require('http-status-codes')

const wrap = require('../wrap.js')
const { routers } = require('../constants')

const {
  generalController,
  lifecycleController,
  metametadataController,
  technicalRequirementsController,
  pedagogicalRequirementsController,
  rightsOfUseController,
  anotationController,
  classificationController,
  metadataController,
  filesController
} = require('../controllers')

const router = express.Router()

router.get(routers.GENERAL+"/contar", wrap(generalController.contarListGeneral))
router.get(routers.LIFECYCLE+"/contar", wrap(lifecycleController.contarListLifecycle))
router.get(routers.META_METADATA+"/contar", wrap(metametadataController.contarListMetametadata))
router.get(routers.TECHNICAL_REQUIEREMENTS+"/contar", wrap(technicalRequirementsController.contarListTechnicalRequirements))
router.get(routers.PEDAGOGICAL_REQUIEREMENTS+"/contar", wrap(pedagogicalRequirementsController.contarListPedagogicalRequirements))
router.get(routers.RIGHTS_OF_USE+"/contar", wrap(rightsOfUseController.contarListRightsOfUse))
router.get(routers.ANOTATIONS+"/contar", wrap(anotationController.contarListAnotation))
router.get(routers.CLASSIFICACION+"/contar", wrap(classificationController.contarListClassification))
router.get(routers.METADATA+"/contar", wrap(metadataController.contarListMetadata))


router.get(routers.GENERAL, wrap(generalController.listGeneral))

router.post(routers.GENERAL, wrap(generalController.createGeneral))

router.put(routers.GENERAL, wrap(generalController.updateGeneral))

router.delete(routers.GENERAL, wrap(generalController.deleteGeneral))


router.get(routers.LIFECYCLE, wrap(lifecycleController.listLifecycle))

router.post(routers.LIFECYCLE, wrap(lifecycleController.createLifecycle))

router.put(routers.LIFECYCLE, wrap(lifecycleController.updateLifecycle))

router.delete(routers.LIFECYCLE, wrap(lifecycleController.deleteLifecycle))


router.get(routers.META_METADATA, wrap(metametadataController.listMetametadata))

router.post(routers.META_METADATA, wrap(metametadataController.createMetametadata))

router.put(routers.META_METADATA, wrap(metametadataController.updateMetametadata))

router.delete(routers.META_METADATA, wrap(metametadataController.deleteMetametadata))


router.get(routers.TECHNICAL_REQUIEREMENTS, wrap(technicalRequirementsController.listTechnicalRequirements))

router.post(routers.TECHNICAL_REQUIEREMENTS, wrap(technicalRequirementsController.createTechnicalRequirements))

router.put(routers.TECHNICAL_REQUIEREMENTS, wrap(technicalRequirementsController.updateTechnicalRequirements))

router.delete(routers.TECHNICAL_REQUIEREMENTS, wrap(technicalRequirementsController.deleteTechnicalRequirements))


router.get(routers.PEDAGOGICAL_REQUIEREMENTS, wrap(pedagogicalRequirementsController.listPedagogicalRequirements))

router.post(routers.PEDAGOGICAL_REQUIEREMENTS, wrap(pedagogicalRequirementsController.createPedagogicalRequirements))

router.put(routers.PEDAGOGICAL_REQUIEREMENTS, wrap(pedagogicalRequirementsController.updatePedagogicalRequirements))

router.delete(routers.PEDAGOGICAL_REQUIEREMENTS, wrap(pedagogicalRequirementsController.deletePedagogicalRequirements))


router.get(routers.RIGHTS_OF_USE, wrap(rightsOfUseController.listRightsOfUse))

router.post(routers.RIGHTS_OF_USE, wrap(rightsOfUseController.createRightsOfUse))

router.put(routers.RIGHTS_OF_USE, wrap(rightsOfUseController.updateRightsOfUse))

router.delete(routers.RIGHTS_OF_USE, wrap(rightsOfUseController.deleteRightsOfUse))


router.get(routers.ANOTATIONS, wrap(anotationController.listAnotation))

router.post(routers.ANOTATIONS, wrap(anotationController.createAnotation))

router.put(routers.ANOTATIONS, wrap(anotationController.updateAnotation))

router.delete(routers.ANOTATIONS, wrap(anotationController.deleteAnotation))


router.get(routers.CLASSIFICACION, wrap(classificationController.listClassification))

router.post(routers.CLASSIFICACION, wrap(classificationController.createClassification))

router.put(routers.CLASSIFICACION, wrap(classificationController.updateClassification))

router.delete(routers.CLASSIFICACION, wrap(classificationController.deleteClassification))


router.get(routers.METADATA, wrap(metadataController.listMetadata))

router.post(routers.METADATA, wrap(metadataController.createMetadata))

router.put(routers.METADATA, wrap(metadataController.updateMetadata))

router.delete(routers.METADATA, wrap(metadataController.deleteMetadata))


router.post(routers.FILES, wrap(filesController.createFiles))


router.get(routers.HEALTH, wrap(async (req, res) => {
  res.status(OK).json({ message: 'OK' })
}))


module.exports = router
