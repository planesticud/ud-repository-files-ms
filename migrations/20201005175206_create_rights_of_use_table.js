exports.up = function(knex, Promise) {
    return knex.schema.createTable('rights_of_use', function(table) {
      table.increments();
      table.string('cost')
      table.string('copyright')
      table.string('description')
      table.string('key_words')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('rights_of_use');
  }