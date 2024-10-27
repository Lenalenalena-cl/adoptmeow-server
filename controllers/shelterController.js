import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const index = (_req, res) => {
  knex("shelter")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Shelter: ${err}`));
};

export const show = (req, res) => {
  knex("shelter")
    .where("id", req.params.id)
    .first()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Shelter: ${err}`));
};

export const cats = (req, res) => {
  knex("cat")
    .where("shelter_id", req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Shelter: ${err}`));
};
