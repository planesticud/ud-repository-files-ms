const lifecycleSchema = {
    'id': '/lifecycleSchema',
    'type': 'object',
    'properties': {
        'email': { 'type': 'string' },
         'version': { 'type': 'string' },
         'state': { 'type': 'string' },
         'participants': { 'type': 'string' }
    },
    'required': []
};


module.exports = {
    lifecycleSchema
}
