/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("shelter", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("address").notNullable();
    table.string("city").notNullable();
    table.string("email").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("shelter");
};
