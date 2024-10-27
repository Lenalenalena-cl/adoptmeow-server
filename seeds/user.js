
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("user").del();

  // Insert seed entries
  await knex("user").insert([
    {
      id: "1",
      name: "Carrie",
      username: "carrie",
      email: "cl@test.com",
      password: "$2b$10$EiYUkGi8/MLh7fzwoVmqNOWDOBeWkABoOtutYZi0IMrKBYsvYHqMO",
    },
  ]);
}