import React from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from './styles';

export default function Upload() {
    const classes = useStyles();
  return (
    <div>
    <input
    accept="image/*"
    className={classes.input}
    id="contained-button-file"
    multiple
    type="file"
  />
  <label htmlFor="contained-button-file">
    <Button variant="contained" component="span" className={classes.button}>
      Upload
    </Button>
  </label>
  </div>
  );
}
