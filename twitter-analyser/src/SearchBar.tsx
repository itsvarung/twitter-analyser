import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 150
  }
}));

interface Props {
  //Function that takes the searched hashtag and returns it to the container
  onSearchTermChanged: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = props => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState("");
  function keyPress(keyCodeValue: any) {
    if (keyCodeValue == 13) {
      if (searchTerm.length != 0) {
        props.onSearchTermChanged(searchTerm);
      }
    }
  }
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <form
            className={classes.root}
            autoComplete="on"
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <TextField
              id="outlined-basic"
              label="What sort of news are you looking for?"
              variant="outlined"
              fullWidth
              onChange={event => {
                setSearchTerm(event.target.value);
              }}
              onKeyDown={event => {
                keyPress(event.keyCode);
              }}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBar;
