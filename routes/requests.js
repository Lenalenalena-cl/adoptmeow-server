
import express from 'express'
import {index, add, thedelete} from '../controllers/requestController.js'

const router = express.Router()
router.route("/").get(index);
router.route("/:id/form").post(add);
router.route("/:id/delete").delete(thedelete);

export default router;
