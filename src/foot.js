import React from 'react';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './styles';


export default function Foot() {
        const classes = useStyles();
        return (
       
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
        </Typography>
        
        </footer>
    
        );
    }
