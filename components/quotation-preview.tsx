// components/QuotationPreview.tsx
import React from "react";
import { IQuotation } from "@/types";

export default function QuotationPreview({ data }: { data: IQuotation }) {
  return (
    <div className="p-8 bg-white text-gray-800 font-sans max-w-4xl mx-auto">
      <h1 className="text-center text-2xl font-semibold text-gray-700 mb-8">
        {data.title}
      </h1>

      <div className="flex justify-between text-sm mb-8">
        <div>
          <strong>From:</strong>
          <br />
          {data.from &&
            data.from.split("<br>").map((item, idx) => {
              const [key, value] = item.split(":");

              return (
                <div key={idx}>
                  {value ? (
                    <span>
                      <strong>{key.trim()}</strong> : {value.trim()}
                    </span>
                  ) : (
                    <strong>{key.trim()}</strong>
                  )}
                </div>
              );
            })}
        </div>
        <div>
          <strong>To:</strong>
          {data.to &&
            data.to.split("<br>").map((item, idx) => {
              const [key, value] = item.split(":");
              return (
                <div key={idx}>
                  {value ? (
                    <span>
                      <strong>{key.trim()}</strong> : {value.trim()}
                    </span>
                  ) : (
                    <span>{key.trim()}</span>
                  )}
                </div>
              );
            })}
        </div>
      </div>

      <div className="text-base font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-2">
        Project Overview
      </div>
      {data.overview.map((p, i) => (
        <p key={i} className="text-sm leading-relaxed mt-2">
          {p}
        </p>
      ))}

      <div className="text-base font-semibold text-gray-700 border-b border-gray-300 pb-2 mt-6 mb-2">
        Scope of Work
      </div>
      <ul className="list-disc list-inside text-sm space-y-1">
        {data.scope.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="text-base font-semibold text-gray-700 border-b border-gray-300 pb-2 mt-6 mb-2">
        Project Phases, Timeline & Cost
      </div>
      <table className="w-full table-auto text-sm border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Phase</th>
            <th className="border px-4 py-2 text-left">Description</th>
            <th className="border px-4 py-2 text-left">Duration</th>
            <th className="border px-4 py-2 text-left">Cost (INR)</th>
          </tr>
        </thead>
        <tbody>
          {data.phases.map((phase, i) => (
            <tr key={i}>
              <td className="border px-4 py-2 font-semibold">{phase.title}</td>
              <td className="border px-4 py-2">{phase.description}</td>
              <td className="border px-4 py-2">{phase.duration}</td>
              <td className="border px-4 py-2">{phase.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right font-semibold text-base text-gray-800 pt-4">
        Total Project Estimate: {data.totalEstimate}
      </div>

      <div className="text-base font-semibold text-gray-700 border-b border-gray-300 pb-2 mt-6 mb-2">
        Payment Terms (Milestone-Based)
      </div>
      <ul className="list-disc list-inside text-sm space-y-1">
        {data.paymentTerms.map((term, i) => (
          <li key={i}>
            <strong>{term.phase}:</strong> {term.amount} – {term.note}
          </li>
        ))}
      </ul>

      <div className="text-base font-semibold text-gray-700 border-b border-gray-300 pb-2 mt-6 mb-2">
        Additional Notes
      </div>
      <ul className="list-disc list-inside text-sm space-y-1">
        {data.notes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>

      <div className="text-center text-xs text-gray-500 mt-12 whitespace-pre-line">
        {data.footerNote}
      </div>
    </div>
  );
}
