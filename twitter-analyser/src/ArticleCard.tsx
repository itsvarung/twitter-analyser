import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  article: Article;
}
const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 345
  },
  media: {
    height: 140
  }
}));

const ArticleCard: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card} variant="outlined">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.article.urlToImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.article.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.article.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={props.article.url}>
            Read Article
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default ArticleCard;
