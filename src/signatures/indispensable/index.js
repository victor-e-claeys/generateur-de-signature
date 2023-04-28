import React from 'react';
import {FormControl, Grid} from '@material-ui/core';
import ImageUploader from '../../components/ImageUploader';

const logo = process.env.PUBLIC_URL + '/indispensable/logo.png';
const phraseLogo = process.env.PUBLIC_URL + '/indispensable/logo-10-ans.png';
const facebookIcon = process.env.PUBLIC_URL +  '/indispensable/facebook.png';
const instagramIcon = process.env.PUBLIC_URL +  '/indispensable/instagram.png';
const linkedinIcon = process.env.PUBLIC_URL +  '/indispensable/linkedin.png';

const colors = {
  primary: '#5664ef',
  black: '#14243d'
}

const fonts = {
  times: "'Times New Roman', Georgia, serif",
  verdana: "Verdana, sans-serif"
}

const styles = {
  container: {
    textAlign: 'left'
  },
  signature:{
    color: colors.black,
    fontFamily: fonts.verdana,
    fontSize: 12,
    textDecoration: 'none',
    margin: 0,
    padding: 0
  },
  inner: {
    paddingTop: 10,
    width: 400
  },
  table:{
    borderWidth: 0
  },
  logo:{
    paddingTop: 10,
    paddingRight: 10,
    textAlign: 'center',
    verticalAlign:'top'
  },
  name: {
    color: colors.primary,
    display: 'inline-block',
    fontFamily: fonts.times,
    fontSize: 24,
    padding:1,
    paddingBottom: 2
  },
  numberLabel:{
    color: colors.primary,
    fontSize: 10,
    width: 25,
    verticalAlign: 'middle'
  },
  number: {
    fontSize: 11
  },
  linksTable:{
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    paddingTop: 16,
    paddingBottom: 12,
    width: "100%"
  },
  addressCell:{
    width: "50%"
  },
  small:{
    fontSize: 8
  },
  link:{
    color: colors.primary,
    display: 'inline-block',
    fontSize: 10,
    fontWeight: 'bold'
  },
  phraseLogoWrapper:{
    paddingTop: 30
  },
  phraseLogo:{
    width: 200
  }
}

class Indispensable extends React.Component {

  constructor(props){
    super(props);
    this.state = { image: 0 };
    this.setImage = this.setImage.bind(this);
  }

  setImage(image){
    this.setState({image});
  }

  componentWillMount(){
    const {setEditableFields} = this.props;
    if(setEditableFields){
      // Comments here!
      setEditableFields([
        <Grid item xs={12}>
          <FormControl style={{width: "100%"}} variant="filled">
            <ImageUploader setImage={this.setImage} apiKey={ window.location.hostname === 'localhost' ? "562833a28ef11e6cb6ce1b31757541cc" : "449391b7f3b451794ff312e6a4cbdc0f" } />
          </FormControl>
        </Grid>
      , 'name', 'title', 'extension', 'mobile', 'language'])
    }
  }

  addressLink = address => {
    return 'https://www.google.com/maps/?q=' + encodeURIComponent(address);
  }

  formatTelephone = (phoneNumber, extension = null) => {
    const number = this.numbersOnly(phoneNumber);
    return <span><span>({number.substr(0, 3)}) {number.substr(3, 3)}-{number.substr(6, 4)}</span>{extension && <span>&nbsp;&nbsp;&nbsp;x{extension}</span>}</span>;
  }

  numbersOnly = string => string.match(/\d+/g).join('')

  render(){
    const {formatTelephone, numbersOnly} = this;
    const {name, title, mobile, extension, language} = this.props;
    const {image} = this.state;
    console.log(image);
    return(
        <table className="signature" style={{...styles.table, ...styles.signature, ...styles.container}}>
          <tr>
            <td className="logo" style={styles.logo}>
              <a href={language === "en" ? "http://indispensablerecruitment.com/" : "http://lindispensable.com"} style={{...styles.signature, ...styles.link}}><img src={image?.url || logo} width={60} height={60} /></a>
            </td>
            <td style={styles.inner}>
              <table style={{...styles.table, ...styles.signature}}>
                <tr>
                  <td colspan={2}>
                    <p style={{...styles.signature, ...styles.name}}>{name}</p>
                    <p style={{...styles.signature}}>{title}</p>
                  </td>
                  <td valign="top" rowSpan={mobile ? 4 : 3} style={styles.phraseLogoWrapper}>
                    <a href={language === "en" ? "http://indispensablerecruitment.com/" : "http://lindispensable.com"} style={{...styles.signature, ...styles.link}}><img src={phraseLogo} style={styles.phraseLogo} /></a>
                  </td>
                </tr>
                <tr>
                  <td className="numberLabel" style={{...styles.numberLabel, paddingTop: 16}}>Mtl.</td>
                  <td width={150} style={{paddingTop: 16}}>
                    <span style={{...styles.signature, ...styles.number}} href={'tel:+15148072134'}>{formatTelephone('5148072134',extension)}</span>
                  </td>
                </tr>
                <tr>
                  <td className="numberLabel" style={styles.numberLabel}>Tor.</td>
                  <td width={150}>
                    <span style={{...styles.signature, ...styles.number}} href={'tel:+14168143690'}>{formatTelephone('4168143690',extension)}</span>
                  </td>
                </tr>
                {mobile && 
                <tr>
                  <td className="numberLabel" style={styles.numberLabel}>Cell.</td>
                  <td width={150}>
                    <span style={{...styles.signature, ...styles.number}} href={'tel:+1' + numbersOnly(mobile)}>{formatTelephone(mobile)}</span>
                  </td>
                </tr>
                }
              </table>
              <table width="100%" style={{...styles.table, ...styles.signature, ...styles.linksTable}}>
                <tr>
                  <td className="linksCell" style={{verticalAlign: 'top'}}>
                    <a target="_blank" href={language === "en" ? "http://indispensablerecruitment.com/" : "http://lindispensable.com"} style={{...styles.signature, ...styles.link}}>
                      {language === "en" ? "indispensablerecruitment.com" : "lindispensable.com"}
                    </a>
                  </td>
                  <td className="linksCell" style={{textAlign: 'right', verticalAlign: 'top'}}>
                    <a href="https://www.instagram.com/lindispensable_recrutement/" style={{...styles.signature}}><img height="12" src={instagramIcon} /></a>&nbsp;&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/company/l'indispensable/" style={{...styles.signature}}><img height="12" src={linkedinIcon} /></a>&nbsp;&nbsp;&nbsp;
                    <a href="https://www.facebook.com/lindispensablerecrutement" style={{...styles.signature}}><img height="12" src={facebookIcon} /></a>
                  </td>
                </tr>
              </table>
              <table width="100%" style={{...styles.table, ...styles.signature, paddingTop: 12, paddingBottom: 16}}>
                <tr>
                  <td className="addressCell">
                    <p style={{...styles.signature, ...styles.small, lineHeight: "9px", textDecoration: "none"}}>
                      {language === 'en' ? 
                        <span href="https://goo.gl/maps/2jT2cx7Fha3s81sh6" style={{...styles.signature, ...styles.small}}>
                          1250, René&#8209;Lévesque&nbsp;blvd.&nbsp;W<br/>
                          Suite&nbsp;4345, Montreal&nbsp;(Qc) H3B&nbsp;4W8
                        </span> : 
                        <span href="https://goo.gl/maps/2jT2cx7Fha3s81sh6" style={{...styles.signature, ...styles.small}}>
                          1250, boul.&nbsp;René&#8209;Lévesque&nbsp;O.<br/>
                          Suite&nbsp;4345, Montréal&nbsp;(Qc) H3B&nbsp;4W8
                        </span>
                      }
                    </p>
                  </td>
                  <td className="addressCell">
                    <p style={{...styles.signature, ...styles.small, lineHeight: "9px", textDecoration: "none"}}>
                      {language === 'en' ? 
                        <span href={this.addressLink('150 King Street West, Suite 200, Toronto (On) M5H 1J9')} style={{...styles.signature, ...styles.small}}>
                          150, King&nbsp;Street&nbsp;West<br/>
                          Suite&nbsp;200, Toronto&nbsp;(On) M5H&nbsp;1J9
                        </span> : 
                        <span href={this.addressLink('150, Rue King Ouest, Suite 200, Toronto (On) M5H 1J9')} style={{...styles.signature, ...styles.small}}>
                          150, Rue&nbsp;King&nbsp;Ouest<br/>
                          Suite&nbsp;200, Toronto&nbsp;(On) M5H&nbsp;1J9
                        </span>
                      }
                    </p>
                  </td>
                </tr>
              </table>
              <p style={{...styles.signature, ...styles.small, lineHeight: "9px", padding:1}}>{language === 'en' ? "CONFIDENTIALITY: This document is intended only for the use of the individual or entity to which it is addressed and contains information that is privileged and confidential. If the reader is not the intended recipient, or the employee or agent, responsible for delivering the message to the intended recipient, you are hereby notified that any dissemination, distribution or copying of this communication is strictly prohibited. If you have received this communication in error, please notify us immediately by telephone and destroy the original message or any copy." : "CONFIDENTIALITÉ : Ces documents transmis par courriel sont de nature privilégiée et confidentielle, destinés à l'usage exclusif de la personne identifiée ci-dessus. S'ils vous sont parvenus par erreur, soyez par les présentes avisé(e) que tout usage, reproduction ou distribution est strictement interdit. Vous êtes donc prié(e) de nous en aviser immédiatement et de détruire toute copie informatisée ou autre."}</p>
            </td>
          </tr>
        </table>
    );
  }
}
  
export default Indispensable;