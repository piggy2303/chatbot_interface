import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid, TextField, Card, CardContent } from '@material-ui/core';

const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    padding: 0
  }
});

class Intent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={12} md={12} xl={9} xs={12}>
            <CardContent className={classes.content} item md={12} xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Giới thiệu chung"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />

              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Giới thiệu mục 1"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Giới thiệu mục 2"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Giới thiệu mục 3"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Intent);
