"use client";

import Button from "@components/ui/Button";
import Loading from "@components/ui/loading";

export default function Page() {
  return (
    <div className="pl-10">
      <br />
      <br />
      <Button
        variant="light"
        disabled
        rounded="none"
        uppercase
        rightIcon={<Loading size={"sm"} color={"red"} />}
      >
        Submit
      </Button>{" "}
      <br /> <br />
      <Button loading size="sm" variant="success">
        Submit
      </Button>{" "}
      <br /> <br />
      <Button size="lg" compact>
        Submit
      </Button>
      <br /> <br />
      <Button onClick={() => console.log("Hey")} size="md" variant="danger">
        Hey
      </Button>
    </div>
  );
}
