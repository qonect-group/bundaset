"use client";

import MultiSelect from "@components/ui/MultiSelect";
import Select from "@components/ui/Select";
import React, { useState } from "react";
export default function Page() {
  const [autoCompleteValue, setautoCompleteValue] = useState<string>();
  const [multiValues, setmultiValues] = useState<any>([]);
  return (
    <div className="px-4">
      <div className="my-6">
        <Select
          creatable
          onChange={setautoCompleteValue}
          value={autoCompleteValue}
          label="Your favorite framework/library"
          placeholder="Favorite Framework"
          data={["React", "Angular", "Svelte", "Vue"]}
        />
      </div>
      <div className="my-6">
        <MultiSelect
          onChange={setmultiValues}
          values={multiValues}
          label="Pick a framework"
          creatable
          maxSelectedValues={2}
          placeholder="Pick all that you like"
          data={[
            { value: "React", label: "React" },
            { value: "Angular", label: "Angular" },
            { value: "Svelte", label: "Svelte" },
            { value: "Vue", label: "Vue" },
          ]}
        />
      </div>
    </div>
  );
}
