"use client";

import MultiSelect from "@components/ui/MultiSelect";
import Select from "@components/ui/Select";
import Switch from "@components/Switch";
import Checkbox from "@components/ui/Checkbox";
import Radio from "@components/ui/Radio";
import React, { useState } from "react";
export default function Page() {
  const [autoCompleteValue, setautoCompleteValue] = useState<string>();
  const [multiValues, setmultiValues] = useState<any>([]);
  const [checked, setchecked] = useState(false);

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
      <div>
        <div className="m-5">
          <Radio
            checked={true}
            onChange={() => {}}
            label="How is the gym training"
          />
          <Radio label="What is andela" onChange={() => {}} />
        </div>
        <div className="m-5">
          <Checkbox
            checked={checked}
            onChange={() => {
              setchecked(!checked);
            }}
            label="Click me to change the selected"
          />
        </div>
        <div className="my-10 mx-5">
          <Switch
            onChange={() => {}}
            title="Available to hire"
            subTitle="Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia."
          />
          <Switch onChange={() => {}} label="Aliquet turpis sed sit lacinia." />
        </div>
      </div>
    </div>
  );
}
