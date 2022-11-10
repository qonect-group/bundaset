"use client";

import Button from "@components/ui/Button";
import Loading from "@components/ui/loading";

export default function Page() {
  return (
    <div className="pl-10">
      <br />
      <br />
      <Button rightIcon={<Loading size={"sm"} color={"red"} />}>
        Submit
      </Button>{" "}
      <br /> <br />
      <Button loading size="sm" variant="success" rounded>
        Submit
      </Button>{" "}
      <br /> <br />
      <Button size="lg">Submit</Button>
      <br /> <br />
      <Button onClick={() => console.log("Hey")} size="md" variant="danger">
        Hey
      </Button>
    </div>
  );
}
