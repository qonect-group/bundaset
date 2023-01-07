"use client";

import Button from "@components/ui/Button";
import { Camera } from "react-feather";
export default function Page() {
  return (
    <div className="pl-10">
      <br />
      <br />
      <Button variant="light" disabled uppercase>
        Submit
      </Button>{" "}
      <br /> <br />
      <Button loading size="sm" variant="success">
        Submit
      </Button>{" "}
      <br /> <br />
      <Button size="md" LeftIcon={Camera}>
        Submit
      </Button>{" "}
      <br /> <br />
      <Button size="sm" RightIcon={Camera}>
        Submit
      </Button>{" "}
      <br /> <br />
      <Button loading size="lg" compact>
        Submit
      </Button>
      <br /> <br />
      <Button onClick={() => console.log("Hey")} size="md" variant="danger">
        Hey
      </Button>
    </div>
  );
}
