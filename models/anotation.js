const anotationSchema = {
    'id': '/anotationSchema',
    'type': 'object',
    'properties': {
        'metada': { 'type': 'string' },
        'entity': { 'type': 'string' },
        'date': { 'type': 'string' },
        'description': { 'type': 'string' }
    },
    'required': []
};


module.exports = {
    anotationSchema
}
