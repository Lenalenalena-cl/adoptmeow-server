
import express from 'express'

import {index, show, cats} from '../controllers/shelterController.js'

const router = express.Router()
    router.route("/").get(index);
    router.route("/:id").get(show);
    router.route("/:id/cats").get(cats);




export default router;
