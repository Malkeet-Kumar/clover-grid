import { FieldArray, useFormikContext } from "formik";
import { useState, KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import clsx from "clsx";

type ChipInputArrayProps = {
  name: string; // Formik field name (e.g., "tags", "requirements")
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

export function ChipInputArray({
  name,
  label,
  placeholder = "Type and press Enter",
  className,
  disabled = false,
}: ChipInputArrayProps) {
  const { values } = useFormikContext<any>();
  const [inputValue, setInputValue] = useState("");

  const currentValues: string[] = values[name] || [];

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    push: (val: string) => void
  ) => {
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim()) {
      e.preventDefault();
      const newItem = inputValue.trim();
      if (!currentValues.includes(newItem)) {
        push(newItem);
      }
      setInputValue("");
    }
  };

  return (
    <div className={clsx("w-full", className)}>
      {label && <label className="font-medium block mb-1">{label}</label>}
      <FieldArray name={name}>
        {({ push, remove }) => (
          <div className="border border-primary/30 rounded-md">
            {/* Chips display */}
            {currentValues.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2 p-2">
                {currentValues.map((val: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center bg-primary text-primary-foreground text-sm px-2 py-1 rounded-full"
                  >
                    <span>{val}</span>
                    {!disabled && (
                      <button
                        type="button"
                        className="ml-2 text-gray-600 hover:text-red-600"
                        onClick={() => remove(i)}
                      >
                        <X className="text-primary-foreground w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Input field */}
            {!disabled && (
              <Input
                className="focus-visible:ring-0 shadow-none border-0 border-primary"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, push)}
                placeholder={"Type here..."}
              />
            )}
          </div>
        )}
      </FieldArray>
    </div>
  );
}
