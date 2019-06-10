import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Button, Paper, Grid, Snackbar, TextField} from '@material-ui/core';
import Signature from './signatures/blancmarine';
import { saveAs } from 'file-saver';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Votre nom',
      title: 'Votre titre',
      telephone: '1234567890',
      email: 'exemple@email.com',
      message: null
    };
  }
  copySignature = () => {
    const node = document.getElementById('signature');
    const selection = window.getSelection();
    const range = document.createRange();
    try{
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();
      this.setState({message: 'La signature a été copiée dans le presse-papier.'});
    }catch(e){
      this.setState({message: 'Cette fonctionnalitée est indisponible dans votre navigateur web.'});
    }
  }
  setValue = key => ({target: {value}}) => {
    this.setState({
      [key]: value
    });
  }
  render(){
    const {message} = this.state;
    const {setValue} = this;
    const signature = <div id="signature"><Signature {...this.state} {...this} /></div>;
    const signatureHtml = ReactDOMServer.renderToStaticMarkup(signature);
    return (
      <Grid container>
        <Grid item xs={12} md={6}>
          {signature}
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{padding:10}}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nom"
                  onChange={setValue('name')}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Titre"
                  onChange={setValue('title')}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Téléphone (chiffres seulement)"
                  onChange={setValue('telephone')}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
                  onChange={setValue('email')}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={() => saveAs(new Blob([signatureHtml], {type: "text/html;charset=utf-8"}), 'signature.html')}>Enregistrer</Button>
                <Button style={{marginLeft: 10}} variant="contained" color="secondary" onClick={this.copySignature}>Copier</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Snackbar 
          autoHideDuration={5000} 
          onClose={() => this.setState({message:null})}
          open={!!message} 
          message={message} />
      </Grid>
    );
  }
}

export default App;
