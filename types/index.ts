export interface Page {
  _id: string;
  name: string;
  title: string;
  content: string;
  slug: string;
  metaDescription?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  pricing: {
    starting: number;
    currency: string;
  };
  category: "web" | "mobile" | "cloud" | "ai" | "design" | "saas" | "support";
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Portfolio {
  _id: string;
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
  results: {
    metric: string;
    value: string;
  }[];
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
  category: string;
  readTime: number;
  published: boolean;
  featured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobPost {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "remote";
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  experience: string;
  salary?: {
    min: number;
    max: number;
    currency: "INR" | "USD" | "JPY";
  };
  benefits: string[];
  applyUrl: string;
  published: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PricePlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  billing: "monthly" | "yearly" | "one-time";
  features: string[];
  limitations?: string[];
  popular: boolean;
  ctaText: string;
  ctaUrl: string;
  category: "web" | "mobile" | "saas" | "support";
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  pagination?: Pagination;
}

// types/api.ts
export type HookState = {
  isLoading: boolean;
  isSuccess: boolean | null | string;
  isError: boolean | null | string;
};

export type HookConfig = {
  queryParams?: Record<string, string | number>;
  formData?: boolean;
};

export type TSideBarState = "full" | "compact" | "hidden";

export interface AuthState {
  isLoading: boolean;
  isSuccess: string | boolean | null;
  isError: string | boolean | null;
}

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type HeaderProps = {
  title?: string;
  breadcrumb?: BreadcrumbItem[];
  actions?: React.ReactNode;
  onMenuClick?: () => void;
};

export interface ITableCol<T> {
  key: keyof T | string;
  header: string;
  className?: string;
  render?: (val: keyof T, row: T, index: number) => React.ReactNode;
  sortable?: boolean;
  sortKey?: string; // key to use for sorting (e.g. backend field name)
}

export * from "./IQuotation";
