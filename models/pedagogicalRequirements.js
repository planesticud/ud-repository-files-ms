const pedagogicalRequirementsSchema = {
    'id': '/pedagogicalRequirementsSchema',
    'type': 'object',
    'properties': {
        'type_interaction': { 'type': 'string' },
        'level_interaction': { 'type': 'string' },
        'semantic_density': { 'type': 'string' },
        'final_user_rol': { 'type': 'string' },
        'context': { 'type': 'string' },
        'age_range': { 'type': 'string' },
        'difficulty': { 'type': 'string' },
        'tipycal_length': { 'type': 'string' },
        'description': { 'type': 'string' },
        'language': { 'type': 'string' },
    },
    'required': []
};


module.exports = {
    pedagogicalRequirementsSchema
}
