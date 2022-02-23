/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("animals", (table) => {
    table.bigIncrements("id").primary();
    table.bigInteger("categoryId").unsigned().notNullable().index().references("categories.id");
    table.string("name").notNullable().unique();
    table.text("description").notNullable();
    table.string("skill");
    table.string("image");
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("animals");
};
