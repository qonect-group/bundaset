import Input from "@components/ui/input";
import React from "react";

export default function Page() {
  return (
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
  );
}
