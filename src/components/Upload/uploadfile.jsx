import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from '../../styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import firebase from '../firebase/firebase';
import {storage} from '../firebase/firebase';
import 'firebase/storage';

class Uploadfile extends Component {
  
    constructor(props) {
        super(props);
        this.state = {image:null, url:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);

    }   

    handleChange = e => {
        if(e.target.files[0]) {
            const {image} = e.target.files[0];
            this.setState(() => ({image}));
        }
    }
    
    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref('images/${image.name}').put(image);
        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
                this.setState({progress});
            }, 
            (error) => {
                console.log(error);
            }, 
            (complete) => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({url});
                })
            });
    }
   
    render()
    {
        //const classes = useStyles();

        return (
            <div>
                <input
                
                accept="image/*"
                //className={classes.input}
                id="contained-button-file"
                //multiple or single //
                type="file"
                onChange={this.handleChange}
                />
            <label htmlFor="contained-button-file">
                <Button onClick={this.handleUpload} color="primary" aria-label="Add" component="span" >
                Upload

                </Button>
                <img src={this.state.url} alt='Uploaded images'></img>
            </label>
            </div>
          );
    }
}

export default Uploadfile;
