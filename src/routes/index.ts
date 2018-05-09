import { Router, RouterOptions } from "express";
import { Request, Response, NextFunction } from "express";

const router = Router();
router.get("/", function(req: Request, res: Response, next: NextFunction) {
  res.render("index", { title: "Express" });
});

export default router;
