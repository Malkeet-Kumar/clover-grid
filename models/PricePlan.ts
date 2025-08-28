import { Schema, model, Document } from "mongoose";

export interface PricePlan extends Document {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  billing: "monthly" | "yearly" | "one-time";
  features: { type: string[] };
  limitations?: { type: string[] };
  popular: boolean;
  ctaText: string;
  ctaUrl: string;
  category: "web" | "mobile" | "saas" | "support";
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const PricePlanSchema = new Schema<PricePlan>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    billing: {
      type: String,
      enum: ["monthly", "yearly", "one-time"],
      required: true,
    },
    features: { type: [String], default: [] },
    limitations: { type: [String] },
    popular: { type: Boolean, default: false },
    ctaText: { type: String, required: true },
    ctaUrl: { type: String, required: true },
    category: {
      type: String,
      enum: ["web", "mobile", "saas", "support"],
      required: true,
    },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const PricePlanModel = model<PricePlan>("PricePlan", PricePlanSchema);
