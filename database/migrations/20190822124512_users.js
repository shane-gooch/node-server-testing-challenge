exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();

      tbl.string("user_name", 255).notNullable();
      tbl
        .string("user_email", 408)
        .notNullable()
        .unique();

      tbl.string("user_group", 255).notNullable();
    })
    .createTable("comments", tbl => {
      tbl.increments();

      tbl.string("text", 600).notNullable();
      tbl
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("comments");
};
