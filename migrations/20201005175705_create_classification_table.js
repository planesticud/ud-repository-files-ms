exports.up = function(knex, Promise) {
    return knex.schema.createTable('classification', function(table) {
      table.increments();
      table.string('purpose')
      table.string('route')
      table.string('description')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('classification');
  }