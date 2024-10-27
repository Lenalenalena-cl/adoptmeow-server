

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("catLikes").del();

  // Insert seed entries
  await knex("catLikes").insert([
    {
      isLiked: true,
      user_id: 1,
      cat_id: 1010,
    },
    {
      isLiked: true,
      user_id: 1,
      cat_id: 1111,
    },
  ]);
}