"use client";

import Checkbox from "@components/ui/Checkbox";
import Radio from "@components/ui/Radio";
import React, { useState } from "react";

export default function Page() {
  const [c, setc] = useState(false);
  return (
    <div>
      <Radio />
    </div>
  );
}
