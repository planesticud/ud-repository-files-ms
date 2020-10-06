exports.up = function(knex, Promise) {
    return knex.schema.createTable('technical_requirements', function(table) {
      table.increments();
      table.string('format')
      table.string('size')
      table.string('location')
      table.string('requierements')
      table.string('comments')
      table.string('length')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('technical_requirements');
  }