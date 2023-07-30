import { Button, Heading, Tag, Text } from "@/components";
import React from "react";

const Index = () => {
  return (
    <>
      <Heading tag="h1">Hello</Heading>
      <Text size="l">Text</Text>
      <Tag size="s" color="red">
        Size S - Red
      </Tag>
      <Tag size="m" color="green">
        Gren
      </Tag>
      <Tag size="s" color="primary">
        Primary
      </Tag>
      <br />
      <Button apperance="primary">Primary</Button>
      <Button apperance="ghost" arrow="down">
        Down
      </Button>
      <Button apperance="ghost" arrow="right">
        Ghost
      </Button>
      <Button apperance="primary" arrow="down">
        Down
      </Button>
    </>
  );
};

export default Index;
