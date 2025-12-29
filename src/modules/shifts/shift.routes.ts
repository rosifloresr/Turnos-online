import { Router } from "express";
import { ShiftController } from "./shift.controller";
import { authMiddleware } from "../auth/auth.middleware";
import e = require("express");

const router = Router();
const controller = new ShiftController();

router.use(authMiddleware);
router.post('/', controller.create);
router.get('/', controller.getActive);

export default router;