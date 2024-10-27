import express from 'express'

import {index, show, favorites, requests, signup} from '../controllers/userController.js'
const router = express.Router()
router.route("/").get(index);
router.route("/:id").get(show);
router.route("/:id/favorites").get(favorites);
router.route("/:id/requests").get(requests);
router.route("/signup").post(signup);

export default router;
