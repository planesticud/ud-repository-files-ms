exports.up = function(knex, Promise) {
    return knex.schema.createTable('metadata', function(table) {
      table.increments();
      table.string('email')
      table.string('general')
      table.string('lifecycle')
      table.string('meta_metadata')
      table.string('technical_requirements')
      table.string('pedagogical_requirements')
      table.string('rights_of_use')
      table.string('anotation')
      table.string('classification')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('metadata');
  }