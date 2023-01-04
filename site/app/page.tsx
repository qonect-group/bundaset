"use client";
import Input from "@components/ui/input";
import Switch from "@components/Switch";
import Checkbox from "@components/ui/Checkbox";
import Radio from "@components/ui/Radio";
import { useState } from "react";

export default function Page() {
  const [checked, setchecked] = useState(false);
  return (
    <div>
      <div className="w-2/5 m-auto space-y-10 p-10">
        <Input
          label="lable"
          type="text"
          variant="normal"
          placeholder="Add placeholder"
        />
        <Input type="text" variant="fill" placeholder="Add placeholder" />
        <Input type="text" variant="outlined" placeholder="Add placeholder" />

        <Input
          type="text"
          label="lable"
          size="sm"
          placeholder="Add placeholder"
        />
        <Input type="text" placeholder="Add placeholder" />
        <Input
          type="text"
          label="lable"
          size="lg"
          placeholder="Add placeholder"
        />

        <Input type="text" disabled placeholder="Add placeholder" />
        <Input type="text" invalid placeholder="Add placeholder" />

        <Input type="text" rounded="full" placeholder="Add placeholder" />
        <Input type="text" rounded="lg" placeholder="Add placeholder" />
        <Input type="text" rounded="md" placeholder="Add placeholder" />
        <Input type="text" rounded="sm" placeholder="Add placeholder" />
        <Input type="text" rounded="none" placeholder="Add placeholder" />
      </div>
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
  );
}
