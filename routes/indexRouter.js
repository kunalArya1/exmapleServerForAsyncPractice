import exprss from "express";
import { homepage } from "../controllers/indexController.js";

const router = exprss.Router();

router.route("/").get(homepage);

export default router;
