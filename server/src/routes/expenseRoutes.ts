import { Router } from "express";
import { getExpensesByCategory } from "../controllers/exprenseController";

const router = Router();

router.get("/", getExpensesByCategory);

export default router;
