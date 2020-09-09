const { OK } = require('http-status-codes');

const logger = require('../utils/logger');


const generalController = module.exports;
const log = logger.getLogger('generalController');

generalController.listGeneral = async (req, res) => {
log.info('get test')
  return res.status(OK).send({});
};