import mongoose, { Schema, model, Document } from "mongoose";

export interface JobPost extends Document {
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "remote";
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  experience: string;
  salary?: { min: number; max: number; currency: string };
  benefits: string[];
  applyUrl: string;
  published: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const SalarySchema = new Schema({
  min: { type: Number, required: true },
  max: { type: Number, required: true },
  currency: { type: String, required: true },
});

const JobPostSchema: Schema<JobPost> = new Schema(
  {
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

export const JobPostModel = mongoose.models.JobPost || model<JobPost>("JobPost", JobPostSchema);
