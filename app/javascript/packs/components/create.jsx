import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Input, Header, Button } from "semantic-ui-react";

function Create(props) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [saved, setSaved] = useState("");

  function submit() {
    const baseUrl = window.location.origin;
    axios.post(`${baseUrl}/articles`, { title, text }).then(res => {
      setSaved(`Article ${res.data} saved!`);
      props.setRefresh(true);
    });
  }

  return (
    <Container>
      <Header as="h3">Create entry</Header>
      <Input
        focus
        placeholder="Title..."
        onChange={evt => setTitle(evt.target.value)}
      />
      <Input
        focus
        placeholder="Text..."
        fluid
        onChange={evt => setText(evt.target.value)}
      />
      <Button onClick={() => submit()}>Submit</Button>
    </Container>
  );
}

export default Create;
