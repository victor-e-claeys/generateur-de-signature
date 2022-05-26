import React from 'react';

const logo = process.env.PUBLIC_URL + '/indispensable/logo.png';
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
    textAlign: 'left',
    padding: 40
  },
  signature:{
    color: colors.black,
    fontFamily: fonts.verdana,
    fontSize: 15,
    textDecoration: 'none',
    margin: 0,
    padding: 0
  },
  table:{
    borderWidth: 0
  },
  logo:{
    paddingRight: 40,
    textAlign: 'center',
    verticalAlign:'top'
  },
  name: {
    color: colors.primary,
    fontFamily: fonts.times,
    fontSize: 30,
    padding:1,
    paddingBottom: 2,
    paddingTop: 8
  },
  numberLabel:{
    color: colors.primary,
    fontSize: 12,
    width: 50,
    verticalAlign: 'middle'
  },
  linksTable:{
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    paddingTop: 16,
    paddingBottom: 12,
    width: "100%"
  },
  small:{
    fontSize: 9
  },
  link:{
    color: colors.primary,
    fontSize: 12,
    fontWeight: 'bold'
  }
}

class Indispensable extends React.Component {

  componentWillMount(){
    const {setEditableFields} = this.props;
    if(setEditableFields){
      setEditableFields(['name', 'title', 'extension', 'mobile', 'language'])
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
    return(
      <table className="signature" style={{...styles.table, ...styles.signature, ...styles.container}}>
        <tr>
          <td style={styles.logo}>
            <a href={language === "en" ? "http://indispensablerecruitment.com/" : "http://lindispensable.com"} style={{...styles.signature, ...styles.link}}><img src={logo} width={80} /></a>
          </td>
          <td style={styles.inner}>
            <p style={{...styles.signature, ...styles.name}}>{name}</p>
            <p style={{...styles.signature}}>{title}</p>
            <table style={{...styles.table, ...styles.signature, paddingTop: 16}}>
              <tr>
                <td style={styles.numberLabel}>Mtl.</td>
                <td>
                  <a style={{...styles.signature, ...styles.number}} href={'tel:+15148072134'}>{formatTelephone('5148072134',extension)}</a>
                </td>
              </tr>
              <tr>
                <td style={styles.numberLabel}>Tor.</td>
                <td>
                  <a style={{...styles.signature, ...styles.number}} href={'tel:+14168143690'}>{formatTelephone('4168143690',extension)}</a>
                </td>
              </tr>
              {mobile && 
              <tr>
                <td style={styles.numberLabel}>Cell.</td>
                <td>
                  <a style={{...styles.signature, ...styles.number}} href={'tel:+1' + numbersOnly(mobile)}>{formatTelephone(mobile)}</a>
                </td>
              </tr>
              }
            </table>
            <table width="100%" style={{...styles.table, ...styles.signature, ...styles.linksTable}}>
              <tr>
                <td style={{verticalAlign: 'top'}}>
                  <a target="_blank" href={language === "en" ? "http://indispensablerecruitment.com/" : "http://lindispensable.com"} style={{...styles.signature, ...styles.link}}>
                    {language === "en" ? "indispensablerecruitment.com" : "lindispensable.com"}
                  </a>
                </td>
                <td style={{textAlign: 'right', verticalAlign: 'top'}}>
                  <a href="https://www.instagram.com/lindispensable_recrutement/" style={{...styles.signature}}><img height="12" src={instagramIcon} /></a>&nbsp;&nbsp;&nbsp;
                  <a href="https://www.linkedin.com/company/l'indispensable/" style={{...styles.signature}}><img height="12" src={linkedinIcon} /></a>&nbsp;&nbsp;&nbsp;
                  <a href="https://www.facebook.com/lindispensablerecrutement" style={{...styles.signature}}><img height="12" src={facebookIcon} /></a>
                </td>
              </tr>
            </table>
            <table style={{...styles.table, ...styles.signature, paddingTop: 12, paddingBottom: 16}}>
              <tr>
                <td style={{paddingRight: 50}}>
                  <p style={{...styles.signature, ...styles.small, lineHeight: "9px", textDecoration: "none"}}>
                    {language === 'en' ? 
                      <a href="https://goo.gl/maps/2jT2cx7Fha3s81sh6" style={{...styles.signature, ...styles.small}}>
                        1250, René-Lévesque blvd. W<br/>
                        Suite 4345, Montreal (Qc) H3B 4W8
                      </a> : 
                      <a href="https://goo.gl/maps/2jT2cx7Fha3s81sh6" style={{...styles.signature, ...styles.small}}>
                        1250, boul. René-Lévesque O.<br/>
                        Suite 4345, Montréal (Qc) H3B 4W8
                      </a>
                    }
                  </p>
                </td>
                <td>
                  <p style={{...styles.signature, ...styles.small, lineHeight: "9px", textDecoration: "none"}}>
                    {language === 'en' ? 
                      <a href={this.addressLink('150 King Street West, Suite 200, Toronto (On) M5H 1J9')} style={{...styles.signature, ...styles.small}}>
                        150, King Street West<br/>
                        Suite 200, Toronto (On) M5H 1J9
                      </a> : 
                      <a href={this.addressLink('150, Rue King Ouest, Suite 200, Toronto (On) M5H 1J9')} style={{...styles.signature, ...styles.small}}>
                        150, Rue King Ouest<br/>
                        Suite 200, Toronto (On) M5H 1J9
                      </a>
                    }
                  </p>
                </td>
              </tr>
            </table>
            <p style={{...styles.signature, ...styles.small, padding:1}}>{language === 'en' ? "CONFIDENTIALITY: This document is intended only for the use of the individual or entity to which it is addressed and contains information that is privileged and confidential. If the reader is not the intended recipient, or the employee or agent, responsible for delivering the message to the intended recipient, you are hereby notified that any dissemination, distribution or copying of this communication is strictly prohibited. If you have received this communication in error, please notify us immediately by telephone and destroy the original message or any copy." : "CONFIDENTIALITÉ : Ces documents transmis par courriel sont de nature privilégiée et confidentielle, destinés à l'usage exclusif de la personne identifiée ci-dessus. S'ils vous sont parvenus par erreur, soyez par les présentes avisé(e) que tout usage, reproduction ou distribution est strictement interdit. Vous êtes donc prié(e) de nous en aviser immédiatement et de détruire toute copie informatisée ou autre."}</p>
          </td>
        </tr>
      </table>
    );
  }
}
  
export default Indispensable;