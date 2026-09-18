import { Router } from "express";
import Project from "../models/Project.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const limit = Number(req.query.limit) || 0;
    const projects = await Project.find().sort({ createdAt: -1 }).limit(limit);
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    next(error);
  }
});

export default router;
