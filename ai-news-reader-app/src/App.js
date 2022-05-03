import React from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import NewsCards from "./components/NewsCards/NewsCards";
import { Typography } from "@material-ui/core";
import logo from "./Logo/logo.png";
const alanKey =
  "861ea3a9be350e3eb3580e91547216b52e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <div className="image">
        <img src={logo} />
      </div>
      <div>
        <div className="app-name">
          <h2> AI NEWS READER</h2>
        </div>
      </div>
      <NewsCards articles={newsArticles}></NewsCards>
    </div>
  );
};

export default App;
