const pagesSchema = {
    'id': '/pagesSchema',
    'type': 'object',
    'properties': {
        'name': { 'type': 'string' },
        'last_name':  { 'type': 'string' },
        'email':  { 'type': 'string' },
        'page_name': {  'type': 'string' }
    },
    'required': ['name','last_name','email', 'page_name']
};

module.exports = {
    pagesSchema
}
