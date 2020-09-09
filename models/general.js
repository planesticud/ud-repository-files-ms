const generalSchema = {
    'id': '/generalSchema',
    'type': 'object',
    'properties': {
        'title': { 'type': 'string' },
        'language':  { 'type': 'string' },
        'description':  { 'type': 'string' },
        'key_words': {  'type': 'string' },
        'coverage': {  'type': 'string' },
        'structure': {  'type': 'string' }
    },
    'required': ['title','language', 'description']
};

const generalSchemaUpdate = {
    'id': '/generalSchema',
    'type': 'object',
    'properties': {
        'title': { 'type': 'string' },
        'language':  { 'type': 'string' },
        'description':  { 'type': 'string' },
        'key_words': {  'type': 'string' },
        'coverage': {  'type': 'string' },
        'structure': {  'type': 'string' }
    },
    'required': ['title']
};

module.exports = {
    generalSchema,
    generalSchemaUpdate
}
