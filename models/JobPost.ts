import { Schema, model, Document } from "mongoose";

export interface JobPost extends Document {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "remote";
  description: string;
  requirements: { type: string[] };
  responsibilities: { type: string[] };
  skills: { type: string[] };
  experience: string;
  salary?: { min: number; max: number; currency: string };
  benefits: { type: string[] };
  applyUrl: string;
  published: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

const SalarySchema = new Schema({
  min: { type: Number },
  max: { type: Number },
  currency: { type: String },
});

const JobPostSchema = new Schema<JobPost>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    type: {
      type: String,
      enum: ["full-time", "part-time", "contract", "remote"],
      required: true,
    },
    description: { type: String, required: true },
    requirements: { type: [String], default: [] },
    responsibilities: { type: [String], default: [] },
    skills: { type: [String], default: [] },
    experience: { type: String, required: true },
    salary: { type: SalarySchema },
    benefits: { type: [String], default: [] },
    applyUrl: { type: String, required: true },
    published: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const JobPostModel = model<JobPost>("JobPost", JobPostSchema);
