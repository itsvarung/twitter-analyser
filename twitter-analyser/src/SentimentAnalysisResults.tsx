import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

interface Props {
  sentimentValue: number;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  title: {
    fontSize: 14
  }
}));

const SentimentAnalysisResults: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Sentiment Analysis Score
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {props.sentimentValue}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default SentimentAnalysisResults;
