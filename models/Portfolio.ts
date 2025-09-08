import { Schema, model, Document } from "mongoose";

export interface Portfolio extends Document {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  category: "web" | "mobile" | "saas" | "ai" | "ecommerce";
  client: string;
  duration: string;
  results: { metric: string; value: string }[];
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const ResultSchema = new Schema({
  metric: { type: String, required: true },
  value: { type: String, required: true },
});

const PortfolioSchema: Schema<Portfolio> = new Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: { type: String, required: true },
    techStack: { type: [String], default: [] },
    imageUrl: { type: String, required: true },
    projectUrl: { type: String },
    githubUrl: { type: String },
    category: {
      type: String,
      enum: ["web", "mobile", "saas", "ai", "ecommerce"],
      required: true,
    },
    client: { type: String, required: true },
    duration: { type: String, required: true },
    results: { type: [ResultSchema], default: [] },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const PortfolioModel = model<Portfolio>("Portfolio", PortfolioSchema);
