import Button from "@components/ui/Button";

export default function Page() {
  return (
    <div>
      <br />
      <br />
      <Button>Submit</Button> <br /> <br />
      <Button size="sm" variant="success" rounded>
        Submit
      </Button>{" "}
      <br /> <br />
      <Button size="lg">Submit</Button>
    </div>
  );
}
