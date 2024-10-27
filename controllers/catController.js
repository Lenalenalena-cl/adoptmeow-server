import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const index = (_req, res) => {
  knex("cat")
    .select("shelter.city", "cat.*")
    .innerJoin("shelter", "shelter.id", "cat.shelter_id")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Cats: ${err}`));
};

export const show = (req, res) => {
  knex("cat")
    .select("shelter.name as shelter_name", "cat.*")
    .innerJoin("shelter", "shelter.id", "cat.shelter_id")
    .where("cat.id", req.params.id)
    .first()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Cat: ${err}`));
};

export const like = (req, res) => {
  console.log("Like");
  knex("catLikes")
    .insert({
      isLiked: true,
      user_id: req.body.userID,
      cat_id: req.body.catID,
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Cat: ${err}`));
};

export const removeLike = (req, res) => {
  knex("catLikes")
    .where({
      user_id: req.body.userID,
      cat_id: req.body.catID,
    })
    .del()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Cat: ${err}`));
};
