
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("catRequests").del();

  // Insert seed entries
  await knex("catRequests").insert([
    {
      cat_id: 1010,
      user_id: 1,
      name: "cl",
      email: "cl@test.com",
      status: "Received",
    }
  ]);
}