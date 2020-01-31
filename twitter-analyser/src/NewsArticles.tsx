import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArticleCard from "./ArticleCard";

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: number;
  name: string;
}

interface Props {
  articles: Article[];
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 150
  }
}));

const NewsArticles: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container spacing={3}>
            {props.articles.map((article, index) => (
              <Grid item xs={4} key={index.toString()}>
                <ArticleCard article={article} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default NewsArticles;
