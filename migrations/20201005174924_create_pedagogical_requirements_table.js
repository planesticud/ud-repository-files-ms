exports.up = function (knex, Promise) {
    return knex.schema.createTable('pedagogical_requirements', function (table) {
        table.increments();
        table.string('type_interaction')
        table.string('level_interaction')
        table.string('semantic_density')
        table.string('final_user_rol')
        table.string('context')
        table.string('age_range')
        table.string('difficulty')
        table.string('tipycal_length')
        table.string('description')
        table.string('language')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('pedagogical_requirements');
}