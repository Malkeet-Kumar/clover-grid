import { Schema, model } from "mongoose";

export interface Service extends Document {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: { type: string[]; default: [] };
  technologies: { type: string[]; default: [] };
  pricing: {
    type: {
      starting: number;
      currency: string;
    };
  };
  category: "web" | "mobile" | "cloud" | "ai" | "design" | "saas" | "support";
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const PricingSchema = new Schema({
  starting: { type: Number, required: true },
  currency: { type: String, required: true },
});

const ServiceSchema = new Schema<Service>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    features: { type: [String], default: [] },
    technologies: { type: [String], default: [] },
    pricing: { type: PricingSchema, required: true },
    category: {
      type: String,
      enum: ["web", "mobile", "cloud", "ai", "design", "saas", "support"],
      required: true,
    },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const ServiceModel = model<Service>("Service", ServiceSchema);
