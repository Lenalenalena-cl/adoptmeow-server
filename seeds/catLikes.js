

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
      cat_id: 5050,
    },
    {
      isLiked: true,
      user_id: 1,
      cat_id: 77,
    },
    {
      isLiked: true,
      user_id: 1,
      cat_id: 11,
    },
  ]);
}