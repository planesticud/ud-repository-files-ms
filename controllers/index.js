const generalController = require ('./generalController')
const metadataController = require ('./metadataController')
const filesController = require('./filesController')
const lifecycleController = require('./lifecycleController')
const metametadataController = require('./metametadatalController')	
const technicalRequirementsController = require('./technicalRequirementsController')	
const pedagogicalRequirementsController = require('./pedagogicalRequirementsController')	
const rightsOfUseController = require('./rightsOfUseController')	
const anotationController = require('./anotationController')	
const classificationController = require('./classificationController')

module.exports = {
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
}