exports.up = function(knex, Promise) {
    return knex.schema.createTable('lifecycle', function(table) {
      table.increments();
      table.string('version')
      table.string('state')
      table.string('participants')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('lifecycle');
  }