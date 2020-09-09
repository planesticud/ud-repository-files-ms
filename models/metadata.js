const metadataSchema = {
    'id': '/metadataSchema',
    'type': 'object',
    'properties': {
        'email': { 'type': 'string' },
        'general':  { 'type': 'string' },
        'lifecycle':  { 'type': 'string' },
        'meta_metadata': {  'type': 'string' },
        'technical_requirements': {  'type': 'string' },
        'pedagogical_requirements': {  'type': 'string' },
        'rights_of_use': {  'type': 'string' },
        'anotation': {  'type': 'string' },
        'classification': {  'type': 'string' }
    },
    'required': ['email','general']
};



module.exports = {
    metadataSchema
}
