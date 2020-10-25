const metadataSchema = {
    'id': '/metadataSchema',
    'type': 'object',
    'properties': {
        'email': { 'type': 'string' },
        'general':  { 'type': 'int' },
        'lifecycle':  { 'type': 'int' },
        'meta_metadata': {  'type': 'int' },
        'technical_requirements': {  'type': 'int' },
        'pedagogical_requirements': {  'type': 'int' },
        'rights_of_use': {  'type': 'int' },
        'anotation': {  'type': 'int' },
        'classification': {  'type': 'int' }
    },
    'required': ['email','general']
};



module.exports = {
    metadataSchema
}
