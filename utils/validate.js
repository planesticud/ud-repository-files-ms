const Validator = require('jsonschema').Validator;

const valid = module.exports


valid.isValid = (instance, schema) => {
const validation = new Validator();
const  ValidatorResult  = validation.validate(instance, schema)

return ValidatorResult.errors
}
