import "dotenv/config";
import mongoose from "mongoose";
import Project from "../models/Project.js";
import Media from "../models/Media.js";
import { projects } from "./data/projects.data.js";
import { media } from "./data/media.data.js";

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected. Seeding...");

  await Project.deleteMany({});
  await Project.insertMany(projects);

  await Media.deleteMany({});
  await Media.insertMany(media);

  console.log("Seed complete.");
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
