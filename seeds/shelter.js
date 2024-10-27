
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("shelter").del();

  // Insert seed entries
  await knex("shelter").insert([
    {
      id: "1",
      name: "Pawsitive Foundation",
      address: "503 Broadway",
      city: "Toronto",
      email: "contact@pawsitive.com",
    },
    {
      id: "2",
      name: "Meow Shelter",
      address: "33 Pearl Street SW",
      city: "Toronto",
      email: "contact@meowshelter.com",
    },
    {
      id: "3",
      name: "Happy Cat Foundation",
      address: "300 Main Street",
      city: "Toronto",
      email: "contact@happycatfoundation.com",
    },
    {
      id: "4",
      name: "Kitty Kitty Foundation",
      address: "890 Brannnan Street",
      city: "Toronto",
      email: "contact@kittykitty.com",
    },
    {
      id: "5",
      name: "Fur Ball Shelter",
      address: "520 Broadway",
      city: "Toronto",
      email: "contact@furball.com",
    },
    {
      id: "6",
      name: "Smelly Cat Shelter",
      address: "1201 Third Avenue",
      city: "Toronto",
      email: "contact@smellycat.com",
    },
    {
      id: "7",
      name: "Saving Cats Shelter",
      address: "2650 NW 5th Avenue",
      city: "Toronto",
      email: "contact@msavingcats.com",
    },
    {
      id: "8",
      name: "Adopt a Cat Foundation",
      address: "13 SW 1th Avenue",
      city: "Toronto",
      email: "contact@adoptacat.com",
    },
  
    {
      id: "9",
      name: "Purr Foundation",
      address: "34 Magazine Avenue",
      city: "Toronto",
      email: "contact@purrfoundation.com",
    },
    {
      id: "10",
      name: "FurPaws Shelter",
      address: "3 Commercial Avenue",
      city: "Toronto",
      email: "contact@furpaws.com",
    },
    {
      id: "11",
      name: "Furever Shelter",
      address: "1800 Heritage Dr SW",
      city: "Toronto",
      email: "contact@furevershelter.com",
    },
  
    {
      id: "12",
      name: "Purradise Shelter",
      address: "4498 Aviation Way",
      city: "Toronto",
      email: "contact@purradiseshelter.com",
    },
  
    {
      id: "13",
      name: "The Cat’s Shelter",
      address: "2500 Rinehart Road",
      city: "Toronto",
      email: "contact@thecatsshelter.com",
    },
    {
      id: "14",
      name: "Feline Rescue Society",
      address: "1213 Main Street",
      city: "Toronto",
      email: "contact@felinerescue.com",
    },
    {
      id: "15",
      name: "Cats and the City",
      address: "3242 Gore Street",
      city: "Toronto",
      email: "contact@catsandthecity.com",
    },
    {
      id: "16",
      name: "Catsrose Shelter",
      address: "4500 53 St",
      city: "Toronto",
      email: "contact@catsroseshelter.com",
    },
  ]);
}