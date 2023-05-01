import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Button, ButtonGroup, Paper, Grid, Menu, MenuList, MenuItem, Snackbar, TextField, FormControl, InputLabel, Select} from '@material-ui/core';
import * as Signatures from './signatures';
import { saveAs } from 'file-saver';
import copy from 'copy-to-clipboard';
import html2canvas from 'html2canvas';
import download from 'downloadjs';
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
      language: 'fr',
      editableFields: [],
      template: false
    };
  }
  componentDidMount() {
    this.setTemplate();
    window.addEventListener("hashchange", this.setTemplate, false);
  }
  componentWillUnmount() {
      window.removeEventListener("hashchange", this.setTemplate, false);
  }
  setTemplate = () => {
    this.setState({template: window.location.hash.substr(1), editableFields: []});
  }
  fields = () => {
    const {setValue, state: {language}} = this;
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
      title2:
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Titre"
            onChange={setValue('title2')}
          />
        </Grid>,
      title3:
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Titre"
            onChange={setValue('title3')}
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
        </Grid>,
      language:
        <Grid item xs={12} md={6}>
          <FormControl style={{width: "100%"}} variant="filled">
            <InputLabel>{language === 'en' ? 'Language' : 'Langue'}</InputLabel>
            <Select
              value={language}
              onChange={setValue('language')}
            >
              <MenuItem value="fr">Français</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>
          </FormControl>
        </Grid>,
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
  copyHTML = html => {
    copy(html);
    this.setState({message: 'La signature a été copiée dans le presse-papier.'});
  }
  copyImage = () => {
    html2canvas(document.querySelector("#signature").childNodes[0]).then(function(canvas) {
      download(canvas.toDataURL("image/jpg"), 'signature.jpg', "image/jpg");
  });
  }
  setValue = key => ({target: {value}}) => {
    this.setState({
      [key]: value
    });
  }
  render(){
    const {setEditableFields} = this;
    let {message, editableFields, template, ...signatureProps} = this.state;
    if(!template || !Signatures[template]) return null;
    if(editableFields.length === 0){
      signatureProps.setEditableFields = setEditableFields;
    }
    signatureProps.getImage = image => {
      return  document.location.origin + document.location.pathname + template.toLowerCase() + '/' + image;
    }
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
              {editableFields.map( field => {
                return typeof field === 'string' ? this.fields()[field] : field;
              })}
              <Grid item xs={12}>
                <ButtonGroup style={{marginRight: 10, marginTop: 10}} variant="contained" color="primary">
                  <Button color="primary" onClick={() => saveAs(new Blob([signatureHtml], {type: "text/html;charset=utf-8"}), 'signature.html')}>
                    Télécharger HTML
                  </Button>
                  <Button onClick={this.copyImage}>
                    Télécharger JPG
                  </Button>
                </ButtonGroup>
                <ButtonGroup style={{marginTop: 10}} variant="contained" color="secondary">
                  <Button onClick={this.copySignature}>
                    Copier Texte
                  </Button>
                  <Button  onClick={() => {
                    this.copyHTML(signatureHtml);
                  }}>
                    Copier HTML
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Paper>
          <Paper style={{padding:10, marginTop: 20}}>
            <h3>Procédures</h3>
            <MenuList>
              <MenuItem onClick={() => { this.copyHTML(signatureHtml); window.open('https://translate.google.com/translate?hl=en&sl=auto&tl=fr&u=https%3A%2F%2Fblog.gimm.io%2Fadd-email-signature-outlook-app-ios%2F'); }}>
                Outlook sur iOS (Copier HTML)
              </MenuItem>
              <MenuItem onClick={() => { this.copySignature(); window.open('https://support.microsoft.com/fr-fr/office/cr%C3%A9er-et-ajouter-une-signature-%C3%A0-des-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2#bk_seehow'); }}>
                Outlook sur PC (Copier texte)
              </MenuItem>
            </MenuList>
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