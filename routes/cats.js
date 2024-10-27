
import express from "express"

import {index, show, like, removeLike} from '../controllers/catController.js'


const router = express.Router()
router.route("/").get(index);
router.route("/:id").get(show);
router.route("/:id/like").post(like);
router.route("/:id/remove-like").delete(removeLike);

export default router;
