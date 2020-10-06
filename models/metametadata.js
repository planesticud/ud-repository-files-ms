const metametadataSchema = {
    'id': '/metametadataSchema',
    'type': 'object',
    'properties': {
        'metada': { 'type': 'string' },
        'language_metadata': { 'type': 'string' },
        'participants': { 'type': 'string' },
    },
    'required': []
};


module.exports = {
    metametadataSchema
}
