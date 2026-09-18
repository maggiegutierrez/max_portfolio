import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    githubUrl: { type: String, required: true },
    liveUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);
