const technicalRequirementsSchema = {
    'id': '/technicalRequirementsSchema',
    'type': 'object',
    'properties': {
        'metada': { 'type': 'string' },
        'format': { 'type': 'string' },
        'size': { 'type': 'string' },
        'location': { 'type': 'string' },
        'requierements': { 'type': 'string' },
        'comments': { 'type': 'string' },
        'length': { 'type': 'string' },
    },
    'required': []
};


module.exports = {
    technicalRequirementsSchema
}
