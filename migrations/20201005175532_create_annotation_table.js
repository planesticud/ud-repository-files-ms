exports.up = function(knex, Promise) {
    return knex.schema.createTable('anotation', function(table) {
      table.increments();
      table.string('entity')
      table.string('date')
      table.string('description')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('anotation');
  }