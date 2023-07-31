import {
  Button,
  Heading,
  Input,
  Rating,
  Tag,
  Text,
  TextArea,
} from "@/components";
import React, { useState } from "react";

const Index = () => {
  const [rating, setRating] = useState(3);
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

      <br />
      <br />
      <hr />
      <Input placeholder="First Name" />
      <br />
      <br />
      <div>
        <TextArea placeholder="Message" />
      </div>
      <br />
      <br />
      <hr />
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
};

export default Index;
