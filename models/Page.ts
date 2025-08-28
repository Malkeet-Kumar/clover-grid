import { Schema, model, Document } from "mongoose";

export interface Page extends Document {
  id: string;
  name: string;
  title: string;
  content: string;
  slug: string;
  metaDescription?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const PageSchema = new Schema<Page>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    metaDescription: { type: String },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const PageModel = model<Page>("Page", PageSchema);
