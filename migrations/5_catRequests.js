/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("catRequests", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("status").notNullable().defaultTo("Received");
    table.integer("cat_id").unsigned().notNullable().defaultTo(0);
    table
      .foreign("cat_id")
      .references("id")
      .inTable("cat")
    table.integer("user_id").unsigned();
    table
      .foreign("user_id")
      .references("id")
      .inTable("user")
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("catRequests");
};
