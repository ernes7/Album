import React from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from '../../styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import firebase from '../firebase/firebase';



export default function Uploadb() {


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
    <Fab color="primary" aria-label="Add" component="span" className={classes.fab}>
      <AddIcon>
      </AddIcon>
    </Fab>
  </label>
  </div>
  );
}
