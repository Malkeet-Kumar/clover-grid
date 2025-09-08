// types/IQuotation.ts

export interface IQuotation {
  title: string;
  from:string,
  to:string,
  overview: string[];
  scope: string[];
  phases: {
    title: string;
    description: string;
    duration: string;
    cost: string;
  }[];
  totalEstimate: string;
  paymentTerms: {
    phase: string;
    amount: string;
    note: string;
  }[];
  notes: string[];
  footerNote: string;
}
