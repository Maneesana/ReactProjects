import React from "react";

import {
  Grid,
  Grow,
  Card,
  CardActionArea,
  Buttons,
  Typography,
} from "@material-ui/core";

import NewsCard from "../NewsCard/NewsCard";
import useStyles from "./styles";

import fb from "./icons/fb.png";
import twitterIcon from "./icons/twitter.png";
import githubIcon from "./icons/github.png";

const cardsInfo = [
  {
    color: "#FF7799",
    newsBy: "Latest News",
    info: "Try saying : Give me the latest news.",
  },
  {
    color: "#F1E8E4",
    newsBy: "News by Source",
    info: "Try saying : Give me the latest news from BBC news (any news_source).",
  },
  {
    color: "#FF847C ",
    newsBy: "News by Category",
    info: "Try saying : Give me the latest Sports (any_category) news",
  },
  {
    color: "#A8E6CE",
    newsBy: "News by Terms",
    info: "Try saying : Give me the latest news about (any_term)",
  },
];

const NewsCards = ({ articles }) => {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <Grow in className={classes.bigContainer}>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {cardsInfo.map((cardinfo) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div
                  className={classes.card}
                  style={{ backgroundColor: cardinfo.color }}
                >
                  <Typography gutterBottom variant="h3" color="textPrimary">
                    {cardinfo.newsBy}
                  </Typography>
                  <Typography variant="h6" color="textTertiary">
                    {cardinfo.info}
                  </Typography>
                </div>
              </Grid>
            );
          })}
          <Card className={classes.projectInfoContainer}>
            <Typography
              className={classes.projectInfo}
              variant="body2"
              color="textPrimary"
            >
              This project is made by: <strong>Maibam Maneesana Singh</strong>
              <br></br>
              projected completed on: {new Date("2022-05-3").toDateString()}
              <p>
                Here is my github profile. You can follow me there :)<br></br>{" "}
                Pls leave a star if you like it
              </p>
              <br></br>
              <span>
                {" "}
                <div className={classes.followMe}>Follow me:</div>
                <a
                  className={classes.links}
                  href="https://github.com/Maneesana"
                  target="_blank"
                >
                  <img className={classes.icons} src={githubIcon} />
                </a>
                <a
                  className={classes.links}
                  href="https://www.facebook.com/marvirckmani.maibam.3/"
                  target="_blank"
                >
                  <img className={classes.icons} src={fb} />
                </a>{" "}
                <a
                  className={classes.links}
                  href="https://twitter.com/MaibamManeesana"
                  target="_blank"
                >
                  <img className={classes.icons} src={twitterIcon} />
                </a>
              </span>
            </Typography>
          </Card>
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
