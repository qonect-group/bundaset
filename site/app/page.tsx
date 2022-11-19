"use client";

import Input from "@components/ui/Input";
import React, { useState } from "react";

export default function Page() {
  const [value, setvalue] = useState("");
  return (
    <div>
      <Input
        placeholder="First name"
        onChange={setvalue}
        label="Enter first name"
        value={value}
      />
    </div>
  );
}
