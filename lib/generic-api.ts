import { Document, Model } from "mongoose";
import { ApiResponse } from "./types";

interface PaginateOptions {
  page?: number;
  limit?: number;
  sort?: Record<string, 1 | -1>;
}

export async function paginate<T extends Document>(
  model: Model<T>,
  query: object = {},
  options: PaginateOptions = {}
): Promise<ApiResponse<T[]>> {
  const page = options.page && options.page > 0 ? options.page : 1;
  const limit = options.limit && options.limit > 0 ? options.limit : 10;
  const sort = options.sort || { createdAt: -1 };

  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    model.find(query).sort(sort).skip(skip).limit(limit).exec(),
    model.countDocuments(query).exec(),
  ]);

  return {
    data,
    success: true,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}
