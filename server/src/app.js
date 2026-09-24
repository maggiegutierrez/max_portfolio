import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import projectsRouter from "./routes/projects.routes.js";
import mediaRouter from "./routes/media.routes.js";

const app = express();

const isDev = process.env.NODE_ENV !== "production";
const clientUrl = process.env.CLIENT_URL?.replace(/\/$/, "");

app.use(
  cors({
    origin: isDev ? /^http:\/\/localhost:\d+$/ : clientUrl,
  }),
);

app.use(express.json());

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/projects", projectsRouter);
app.use("/api/media", mediaRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong" });
});

export default app;
