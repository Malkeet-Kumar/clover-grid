import mongoose, { Schema, Document, Model } from "mongoose";

// 1. TypeScript interface
export interface ITeamMember extends Document {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  isFeatured: boolean;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Mongoose schema
const TeamMemberSchema: Schema<ITeamMember> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    bio: { type: String, required: true },
    expertise: [{ type: String, required: true }],

    // extras
    isFeatured: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

// 3. Mongoose model (prevents recompilation issues in Next.js)
export const TeamMember: Model<ITeamMember> =
  mongoose.models.TeamMember || mongoose.model<ITeamMember>("TeamMember", TeamMemberSchema);
