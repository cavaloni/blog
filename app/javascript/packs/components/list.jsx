import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Header } from "semantic-ui-react";

function List(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const { refreshNeeded, setRefresh } = props;
    if (refreshNeeded) {
      const baseUrl = window.location.origin;
      axios.get(`${baseUrl}/articles`).then(res => {
        setArticles(res.data);
      });
      setRefresh(false);
    }
  });

  return (
    <Container>
      {articles.length > 0 &&
        articles.map(article => (
          <Container key={article.id}>
            <Header as="h3">{article.title}</Header>
            <Container>{article.text}</Container>
          </Container>
        ))}
    </Container>
  );
}

export default List;
