import mongoose from "mongoose";

const { Schema } = mongoose;

const mediaSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String },
    category: {
      type: String,
      enum: ["graphic_design", "photography"],
      required: true,
    },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.models.Media || mongoose.model("Media", mediaSchema);
