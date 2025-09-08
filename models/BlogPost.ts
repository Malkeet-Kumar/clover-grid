import { Schema, model, Document } from "mongoose";

export interface BlogPost extends Document {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: { name: string; avatar: string; bio: string };
  tags: string[];
  category: string;
  readTime: number;
  published: boolean;
  featured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

const AuthorSchema = new Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  bio: { type: String, required: true },
});

const BlogPostSchema: Schema<BlogPost> = new Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true },
    author: { type: AuthorSchema, required: true },
    tags: { type: [String], default: [] },
    category: { type: String, required: true },
    readTime: { type: Number, required: true },
    published: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    publishedAt: { type: String, required: true },
  },
  { timestamps: true }
);

export const BlogPostModel = model<BlogPost>("BlogPost", BlogPostSchema);
