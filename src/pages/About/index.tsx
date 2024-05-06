import { Button, Label, Header } from "dc-custom-component";

const About = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Label label="Greet to arnold" allCaps color="text-primary" />
        <Button
          size="small"
          label="submit"
          backgroundColor="#FAFAFA"
          onClick={() => console.info("hey arnold!")}
        />
      </div>
    </div>
  );
};

export default About;
