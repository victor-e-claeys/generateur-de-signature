import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Button, Paper, Grid, Snackbar, TextField} from '@material-ui/core';
import * as Signatures from './signatures';
import { saveAs } from 'file-saver';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: 'exemple@email.com',
      name: 'Votre nom',
      telephone: '450 777-7777',
      extension: '',
      title: 'Votre titre',
      message: null,
      editableFields: []
    };
  }
  fields = () => {
    const {setValue} = this;
    return {
      name: 
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Nom"
            onChange={setValue('name')}
          />
        </Grid>,
      title:
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Titre"
            onChange={setValue('title')}
          />
        </Grid>,
      telephone:
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Téléphone"
            onChange={setValue('telephone')}
          />
        </Grid>,
      extension:
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Extension"
            onChange={setValue('extension')}
          />
        </Grid>,
      mobile:
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Cellulaire"
            onChange={setValue('mobile')}
          />
        </Grid>,
      email:
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Email"
            onChange={setValue('email')}
          />
        </Grid>
    }
  }
  setEditableFields = editableFields => {
    this.setState({editableFields});
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
    const {setEditableFields} = this;
    let {message, editableFields, ...signatureProps} = this.state;
    if(editableFields.length === 0){
      signatureProps.setEditableFields = setEditableFields;
    }
    const template = window.location.hash.substr(1);
    if(!template || !Signatures[template]) return null;
    const signature = new React.createElement(Signatures[template], signatureProps);
    const wrappedSignature = <div id="signature">{signature}</div>;
    const signatureHtml = ReactDOMServer.renderToStaticMarkup(wrappedSignature);
    return (
      <Grid container>
        <Grid item xs={12} md={6}>
          {wrappedSignature}
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{padding:10}}>
            <Grid container spacing={2}>
              {Object.keys(this.fields()).map( key => {
                if(this.state.editableFields.indexOf(key) >= 0){
                  return this.fields()[key];
                }else{
                  return null;
                }
              })}
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
