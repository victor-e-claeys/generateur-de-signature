import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Button, Paper, Grid, TextField} from '@material-ui/core';
import Signature from './signatures/blancmarine';
import { saveAs } from 'file-saver';
import copy from 'copy-to-clipboard';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Votre nom',
      title: 'Votre titre',
      telephone: '1234567890',
      email: 'exemple@email.com'
    };
  }
  setValue = key => ({target: {value}}) => {
    this.setState({
      [key]: value
    });
  }
  render(){
    const {setValue} = this;
    const signature = <Signature {...this.state} {...this} />;
    const signatureHtml = ReactDOMServer.renderToStaticMarkup(signature);
    return (
      <Grid container>
        <Grid item xs={6}>
          {signature}
        </Grid>
        <Grid item xs={6}>
          <Paper style={{padding:10}}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Nom"
                  onChange={setValue('name')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Titre"
                  onChange={setValue('title')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Téléphone (chiffres seulement)"
                  onChange={setValue('telephone')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Email"
                  onChange={setValue('email')}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={() => saveAs(new Blob([signatureHtml], {type: "text/html;charset=utf-8"}), 'signature.html')}>Enregistrer</Button>
                <Button variant="contained" color="secondary" onClick={() => copy(signatureHtml)}>Copier dans le presse-papier</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
