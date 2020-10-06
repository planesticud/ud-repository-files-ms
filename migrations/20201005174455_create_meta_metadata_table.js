exports.up = function(knex, Promise) {
    return knex.schema.createTable('meta_metadata', function(table) {
      table.increments();
      table.string('metada')
      table.string('language_metadata')
      table.string('participants')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('meta_metadata');
  }