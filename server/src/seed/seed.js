import "dotenv/config";
import mongoose from "mongoose";
import Project from "../models/Project.js";
import Media from "../models/Media.js";

// Coloca tus imágenes en client/public/assets/images/gallery/
// y referencia esa misma ruta acá (ej. "/assets/images/gallery/logo-1.jpg").

const projects = [
  {
    title: "Project One",
    description: "Reemplaza con la descripción real.",
    githubUrl: "https://github.com/maggiegutierrez/REPLACE_ME",
    liveUrl: "https://REPLACE_ME.vercel.app",
    thumbnailUrl: "/assets/images/projects/work_1.png",
  },
];

const media = [
  {
    title: "Reemplaza con el título real",
    category: "graphic_design",
    imageUrl: "/assets/images/gallery/REPLACE_ME.jpg",
  },
  {
    title: "Reemplaza con el título real",
    category: "photography",
    imageUrl: "/assets/images/gallery/REPLACE_ME.jpg",
  },
];

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
