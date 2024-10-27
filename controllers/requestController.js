import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const index = (_req, res) => {
  knex("catRequests")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Requests: ${err}`));
};

export const add = (req, res) => {
  knex("catRequests")
    .insert({
      user_id: req.body.userID,
      cat_id: req.body.catID,
      name: req.body.name,
      email: req.body.email,
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Request: ${err}`));
};

export const thedelete = (req, res) => {
  knex("catRequests")
    .where("id", req.params.id)
    .del()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Request: ${err}`));
};
