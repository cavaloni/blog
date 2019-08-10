import React, { useState, useEffect } from "react";
import axios from "axios";
import Create from "../components/create";
import List from "../components/list";
import "semantic-ui-css/semantic.min.css";

function Home(props) {
  const [refreshNeeded, setRefresh] = useState(true);

  return (
    <div>
      <h1>This is the home page</h1>
      <Create setRefresh={setRefresh} />
      <List refreshNeeded={refreshNeeded} setRefresh={setRefresh} />
    </div>
  );
}

export default Home;
