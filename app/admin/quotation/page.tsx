"use client";
import React, { useState } from "react";
import { IQuotation } from "@/types";
import QuotationPreview from "@/components/quotation-preview";

export default function EditorPage() {
  const [data, setData] = useState<IQuotation>({
    title: "Quotation",
    from: "",
    to: "",
    overview: [""],
    scope: [""],
    phases: [{ title: "", description: "", duration: "", cost: "" }],
    totalEstimate: "",
    paymentTerms: [{ phase: "", amount: "", note: "" }],
    notes: [""],
    footerNote: "Thank you for considering this proposal.\n— Kajal Chandail",
  });

  const updateField = (field: keyof IQuotation, value: any) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="flex h-screen">
      {/* Left: Editor */}
      <div className="w-1/2 p-6 overflow-auto border-r border-gray-300 space-y-4 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Edit Quotation</h2>

        {/* Developer Info */}
        <div>
          <label className="block font-medium text-sm">
            From (can take multi line using , )
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={data.from}
            onChange={(e) =>
              setData({
                ...data,
                from: e.target.value,
              })
            }
          />
        </div>

        {/* Client Info */}
        <div>
          <label className="block font-medium text-sm">Client Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={data.to}
            onChange={(e) =>
              setData({
                ...data,
                to: e.target.value,
              })
            }
          />
        </div>

        {/* Total Estimate */}
        <div>
          <label className="block font-medium text-sm">Total Estimate</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={data.totalEstimate}
            onChange={(e) => updateField("totalEstimate", e.target.value)}
          />
        </div>

        {/* Overview (multi-line) */}
        <div>
          <label className="block font-medium text-sm">Project Overview</label>
          <textarea
            rows={5}
            className="w-full p-2 border rounded"
            value={data.overview.join("\n")}
            onChange={(e) =>
              updateField("overview", e.target.value.split("\n"))
            }
          />
        </div>

        {/* Scope (multi-line) */}
        <div>
          <label className="block font-medium text-sm">Scope of Work</label>
          <textarea
            rows={4}
            className="w-full p-2 border rounded"
            value={data.scope.join("\n")}
            onChange={(e) => updateField("scope", e.target.value.split("\n"))}
          />
        </div>
      </div>

      <div className="w-1/2 bg-white overflow-auto">
        <QuotationPreview data={data} />
      </div>
    </div>
  );
}
