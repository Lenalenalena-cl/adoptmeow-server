

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("cat").del();

  // Insert seed entries
  await knex("cat").insert([
    {
      id: 11,
      shelter_id:1,
      name: "Robson",
      image: "/images/cat0.jpeg",
      gender: "Male",
      description:
        "This wise, loving senior gentleman was rescued in a small town just outside Calgary and his owners were not able to be located. So he is starting over. After a full health check, a bit of a shave to remove some matts, he is healthy and would like to meet his match as soon as possible. He is not a fan of other cats and would prefer to be the only King in your life.",
      age: "Senior",
    },
    {
      id: 22,
      shelter_id: 2,
      name: "Pedro",
      image: "/images/cat1.jpeg",
      gender: "Male",
      description:
        "I am a big and sometimes sassy guy. I prefer a quieter place of residence without other pets or kids. I have a weird love/hate relationship with bags. When you handle one it startles me but I like to try to climb inside of them. Despite being kind of picky and oddly not a big fan of Temptations treats, I have a healthy appetite. I do play with toys with you and alone but not for long. Once I settle in with you I will try to take your spot on the couch or at worst lean on you while sitting next to you.",
      age: "Adult",
    },
    {
      id: 3,
      shelter_id: 3,
      name: "Milena",
      image: "/images/cat2.jpeg",
      gender: "Female",
      description:
        "Milena is a very curious cat, who likes to know what you’re up to. Shy to begin with, but will soon warm up to you. She will come for cuddles on her terms, and loves you to play with her. She likes treats, and loves to sit in her favourite spots which are higher up.",
      age: "Young",
    },
    {
      id: 44,
      shelter_id: 4,
      name: "Lucas",
      image: "/images/cat3.jpeg",
      gender: "Male",
      description:
        "This sweet but shy boy was brought in from a rural property. He acts a little unsure when he first meets someone, but once he realizes you want to love him he is soon pushing into your hand for attention. He is good with other cats but does not have dog experience. This attractive tuxedo with a black smooch beside his nose needs a forever human.",
      age: "Kitty",
    },
    {
      id: 55,
      shelter_id: 5,
      name: "Orange",
      image: "/images/cat4.jpeg",
      gender: "Male",
      description:
        "Sure, Orange has a few more health issues, aches and pains as a dignified fellow of 13 years, but he also carries the wisdom of his years and a heart full of love. On the health front, Bertie is FIV positive, has mild heart disease, arthritis, and recently had a urinary infection and he is in the very early stages of kidney failure.",
      age: "Senior",
    },
    {
      id: 66,
      shelter_id: 6,
      name: "Marie",
      image: "/images/cat5.jpeg",
      gender: "Female",
      description:
        "After a rural rescue Marie is shy, but curious about her new living circumstance. Lounging in cosy hidey beds and watching world around her, enjoying her morning and evening canned food and quietly learning to trust volunteers are a few of her favourite things.",
      age: "Young",
    },
    {
      id: 77,
      shelter_id: 7,
      name: "Felipe",
      image: "/images/cat6.jpeg",
      gender: "Male",
      description:
        "Due to Felipe's long time on the streets and probably from a past territorial skirmish, he has contracted FIV (Feline Immunodeficiency Virus). Please do not be afraid of adopting Felipe. Cats with FIV can live long uneventful lives wtih normal attentive care.",
      age: "Adult",
    },
    {
      id: 88,
      shelter_id: 8,
      name: "Gael",
      image: "/images/cat7.jpeg",
      gender: "Male",
      description:
        "I'm Gael, a very affectionate and sly kitten. I need to undergo surgery and today I no longer have a right ear, so I am deaf only on that side. Also, I have a sequel that makes me not poke my eye properly, which doesn't affect anything in my life, I just need humans to put a few drops of eye drops in my eye so it doesn't get dry. Did I mention that I'm affectionate? So that's one of my points, I love the neck caress and I'm protecting the strong that are for a family that gives me endless affection!",
      age: "Kitty",
    },
    {
      id: 99,
      shelter_id: 9,
      name: "Moe",
      image: "/images/cat8.jpeg",
      gender: "Male",
      description:
        "My old house was very dirty, there wasn't even a litter box for me to do my needs, I had to do it on the floor. My food was leftovers and my water was always full of garbage. I've had almost zero contact with humans, so I'm more scared and I'm afraid. I know that if I go to a family that is not in a hurry to adapt and that understands all the suffering I've experienced, little by little I will feel safe and know that I can be really happy!",
      age: "Kitty",
    },
    {
      id: 1010,
      shelter_id: 10,
      name: "Pintada",
      image: "/images/cat9.jpeg",
      gender: "Female",
      description:
        "Hi guys, I'm Pintada! Before arriving at the FurPaws Shelter I lived with a family, as I had access to the street, I ended up being run over and had a spinal fracture that left her paraplegic, this accident did not stop me from giving a lot of love to humans and being patient with the caretakers who do the daily care with me, like changing my diaper. That's why I believe I'll still get a family to give me love and be able to receive my affection in return!",
      age: "Young",
    },
    {
      id: 1111,
      shelter_id: 11,
      name: "Puma",
      image: "/images/cat10.jpeg",
      gender: "Male",
      description:
        "I lived with a protector who asked the Furever Shelter for help when she couldn't take care of me anymore, because I wasn't walking with my legs. In the x-ray the aunts saw that my spine has many changes. So, with medical follow-up, medication, physiotherapy and acupuncture, I went back to walking alone and even jumping! To this day I need to take daily medication to control chronic pain, and even with all these treatments I'm still a very charming and extremely affectionate gentleman, I love a lap! Shall we watch TV together?",
      age: "Adult",
    },
    {
      id: 212,
      shelter_id: 12,
      name: "Dunny",
      image: "/images/cat11.jpeg",
      gender: "Male",
      description:
        "Hi guys, this is Dunny, I came to tell you my life story! I had a serious accident that left one of my eyes hanging and my mouth broken. I was rushed to the Institute, where I received first aid, many tests and surgery. I ended up losing that eye, but I can see very well with the other one! In one of the tests I did, it showed that I am FIV positive, which is a disease that makes me a little more delicate, but it doesn't stop me from living well and happy! I can be a brother to dogs, but only to cats if he is also FIV positive. I'm very bashful and I love being around people!",
      age: "Young",
    },
    {
      id: 1313,
      shelter_id: 13,
      name: "Viva",
      image: "/images/cat12.jpeg",
      gender: "Female",
      description:
        "I was going through the garbage with my little girl looking for food, when a girl found me and rescued me. At the Institute I went through a medical consultation and did several exams. I ended up finding out that I have the FELV virus. My aunts said that this disease can make me more delicate, but that doesn't stop me from being healthy and happy! I really wanted to show you how affectionate I am and I love a little belly scratch!",
      age: "Kitty",
    },
    {
      id: 1414,
      shelter_id: 14,
      name: "Ringo",
      image: "/images/cat13.jpeg",
      gender: "Male",
      description:
        "I'm Ringo, a very quiet 8 year old kitten! I was rescued from a land by an accumulator, in that place I had many cats with me and the space was too small for us to live. ILM aunts told me that since I didn't socialize when I was a puppy, today I became a very shy kitten. But I already leave a tip for my future godfathers and godmothers: what I love most in this life are the meat sachets, it really conquers me! Today I am looking for a family that respects my space and is patient with my process.",
      age: "Young",
    },
    {
      id: 1515,
      shelter_id: 15,
      name: "Brigadeiro",
      image: "/images/cat14.jpeg",
      gender: "Male",
      description:
        "I have lived in a cattery sharing everything with other cats for many years. From my cattery, I see cats that are not FIV or FELV being adopted quickly, but me and my companions being forgotten. I take medicine every day because of my illness, but I don't even bother to do that. I'm super loving and I can't see anyone sitting that I already want to climb on my lap! Let me know what it's like to be a kitten with a family?",
      age: "Young",
    },
    {
      id: 343,
      shelter_id: 2,
      name: "Luiza",
      image: "/images/cat43.jpeg",
      gender: "Female",
      description:
        "I am beautiful and velvety, with loving and kind eyes. I am well behaved, I have a smooth walk and a lot of sweetness to distribute. And all this despite having been found in a situation of great neglect. On their way to work, two aunts found me on the sidewalk, very dehydrated and with a broken canine tooth. So they gave me a ride straight here.",
      age: "Kitty",
    },
    {
      id: 4444,
      shelter_id: 3,
      name: "Max",
      image: "/images/cat44.jpeg",
      gender: "Male",
      description:
        "My super power is love and so I really need to be adopted by a family that has a big heart because I need company, I can't be adopted alone, as the poet said 'it's impossible to be happy alone'",
      age: "Young",
    },
    {
      id: 545,
      shelter_id: 4,
      name: "Kelly",
      image: "/images/cat45.jpeg",
      gender: "Female",
      description:
        "I'm beautiful! Just adopt me and you'll see that, in addition to my beauty, I have a charming personality. I am very friendly, attached, sweet, I will follow you all the time. Nobody feels alone with me around.",
      age: "Young",
    },
    {
      id: 4646,
      shelter_id: 5,
      name: "Sofia",
      image: "/images/cat46.jpeg",
      gender: "Female",
      description:
        "I'm a good little cat and very needy. I never had love and after the rescue, when I discovered what love is, I fell in love and I was like that, a needy kitten. I'm ready for adoption, I've been spayed, vaccinated, microchipped and I'm FIV/FeLV negative. Give me a second chance to be happy?",
      age: "Young",
    },
    {
      id: 4747,
      shelter_id: 6,
      name: "Jorge",
      image: "/images/cat47.jpeg",
      gender: "Male",
      description:
        "Two minutes for you to adopt me! Lol, I was inspired by Iron Maiden's music to start performing, and I'll say that I'm not dark, I'm pure joy! My name is Midnight, and my hair is all worked on in red and black tones, like a scale. Despite being a teenager, I was found walking alone on the street! The aunt who saw me soon thought she couldn't leave me like this without anyone, and kept me in a temporary home until a vacancy came up here.",
      age: "Young",
    },
    {
      id: 4848,
      shelter_id:7,
      name: "Julio",
      image: "/images/cat48.jpeg",
      gender: "Male",
      description:
        "I have soft and silky hairs, I like petting and eating and, like any puppy, I love to play, especially with other kittens.",
      age: "Kitty",
    },
    {
      id: 4949,
      shelter_id: 8,
      name: "Fran",
      image: "/images/cat49.jpeg",
      gender: "Female",
      description:
        "I'm here looking for a very special family to adopt me. I was rescued from a very bad place, I was sick, weak and very hungry when I got here, but I gained a lot of care and managed to recover quickly.",
      age: "Kitty",
    },
    {
      id: 5050,
      shelter_id: 9,
      name: "Dudu",
      image: "/images/cat50.jpeg",
      gender: "Male",
      description:
        "Dudu loves affection and loves to be held. He has participated in some adoption fairs, but no one wanted to adopt him. He is a super cute and wonderful kitten. He lives here at the shelter waiting for a beautiful family.",
      age: "Young",
    },

  ]);
}