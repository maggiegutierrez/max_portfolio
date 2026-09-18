import { Router } from "express";
import Media from "../models/Media.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const media = await Media.find(filter).sort({ createdAt: -1 });
    res.json(media);
  } catch (error) {
    next(error);
  }
});

export default router;
