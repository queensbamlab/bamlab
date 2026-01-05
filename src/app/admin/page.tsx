"use client";
import { useState } from "react";
import { parseRawCitation } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Page = () => {
  // Start with one empty input
  const [inputs, setInputs] = useState<string[]>([""]);
  const [jsonOutput, setJsonOutput] = useState<string>("");

  // Add a new empty row
  const addRow = () => setInputs([...inputs, ""]);

  // Update specific row
  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  // Remove a row
  const removeRow = (index: number) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs.length ? newInputs : [""]); // Keep at least one
  };

  // The Magic Button
  const handleParse = () => {
    // Process only non-empty inputs
    const results = inputs
      .filter((text) => text.trim().length > 10) // Basic length check
      .map((text) => parseRawCitation(text));

    setJsonOutput(JSON.stringify(results, null, 2));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LEFT COLUMN: INPUTS */}
      <div className="bg-card p-6 rounded-lg shadow-md border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Raw Text Citations
          </h2>
          <Button onClick={addRow}>+ Add Row</Button>
        </div>

        <div className="space-y-4">
          {inputs.map((input, index) => (
            <div key={index} className="flex gap-2 items-start">
              <span className="mt-2 text-xs text-gray-400 font-mono w-4">
                {index + 1}
              </span>
              <textarea
                className="flex-1 p-3 border rounded-md text-sm font-mono focus:ring-2 focus:ring-blue-500 outline-none transition"
                rows={3}
                placeholder="Paste citation here (e.g. Woo, M., ...)"
                value={input}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
              <Button
                variant={"ghost"}
                onClick={() => removeRow(index)}
                className="text-red-400 hover:text-red-600 p-2"
                title="Remove"
              >
                ✕
              </Button>
            </div>
          ))}
        </div>

        <Button onClick={handleParse} className="mt-6">
          Convert to JSON
        </Button>
      </div>

      {/* RIGHT COLUMN: OUTPUT */}
      <div className="bg-card p-6 rounded-lg shadow-md flex flex-col border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">JSON Output</h2>
          <Button
            size="sm"
            variant={"outline"}
            onClick={() => navigator.clipboard.writeText(jsonOutput)}
          >
            Copy to Clipboard
          </Button>
        </div>

        <textarea
          readOnly
          value={jsonOutput}
          className="flex-1 w-full bg-gray-800 p-4 font-mono text-sm rounded-md text-green-400 outline-none resize-none"
          placeholder="JSON will appear here..."
        />
      </div>
    </div>
  );
};
export default Page;
