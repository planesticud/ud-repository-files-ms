exports.up = function(knex, Promise) {
    return knex.schema.createTable('general', function(table) {
      table.increments();
      table.string('title')
      table.string('language')
      table.string('description')
      table.string('key_words')
      table.string('coverage')
      table.string('structure')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('general');
  }