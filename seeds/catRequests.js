
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
      cat_id: 22,
      user_id: "1",
      name: "cl",
      email: "cl@test.com",
      status: "Received",
    },
    {
      cat_id: 33,
      user_id: "1",
      name: "cl",
      email: "cl@test.com",
      status: "In Review",
    },
    {
      cat_id: 44,
      user_id: "1",
      name: "cl",
      email: "cl@test.com",
      status: "Approved",
    },
    {
      cat_id: 55,
      user_id: "1",
      name: "cl",
      email: "cl@test.com",
      status: "Declined",
    },
  ]);
}