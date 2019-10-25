import React from 'react';
import logo from './assets/photo_profil.png';
import facebookIcon from './assets/fb.png';
import instagramIcon from './assets/insta.png';
import pinterestIcon from './assets/linkedin.png';

const colors = {
  primary: '#c37415',
  black: '#000000'
}

const styles = {
  container: {
    borderTop: "dotted #ccc 1px",
    textAlign: 'left',
    paddingTop: 10
  },
  signature:{
    color: colors.black,
    fontFamily: "Arial, sans-serif",
    letterSpacing: .5
  },
  logo:{
    paddingRight: 30,
    textAlign: 'center',
    verticalAlign:'top'
  },
  inner: {
    fontSize: "9pt",
    fontWeight: 'normal',
  },
  name: {
    fontSize: "14pt",
    fontWeight: 'bold',
    marginBottom: 4
  },
  title: {
    marginBottom: 12
  },
  prefix:{
    color: colors.primary,
    display: 'inline-block',
    fontWeight: 'bold',
    marginRight: 12
  },
  link: {
    color: colors.black,
    textDecoration: 'none'
  },
  telephone: {
    
  },
  url: {
    margin: '12px 0 8px'
  },
  urlLink: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: '10pt'
  },
  address: {
    whiteSpace: 'pre',
    paddingRight: 16
  },
  social: {
    borderBottom: '1px solid #949494',
    paddingTop: 4,
    paddingBottom: 4,
  },
  contact: {
    lineHeight: 1.2
  }
}

class CapsuleCreative extends React.Component {
  constructor(props){
    super(props);
    this.url = 'https://www.lacapsulecreative.com';
    this.address = '100 Rue Gaston-Dumoulin,\nsuite 102, Blainville, QC J7C 0A3';
  }

  componentWillMount(){
    const {setEditableFields} = this.props;
    if(setEditableFields){
      setEditableFields(['name', 'title', 'email', 'telephone'])
    }
  }

  addressLink = address => {
    return 'https://www.google.com/maps/?q=' + address;
  }

  formatUrl = url => {
    return url.replace(/(http(s)\:\/\/)/, '');
  }

  formatTelephone = number => {
    return '(' + number.substr(0, 3) + ') ' + number.substr(3, 3) + '-' + number.substr(6, 4);
  }

  render(){
    const {address, addressLink, formatTelephone, formatUrl, url} = this;
    const {email, name, title, telephone} = this.props;
    return(
      <table className="signature" style={{...styles.signature, ...styles.container}}>
        <tr>
          <td style={styles.logo}>
            <img src={logo} />
          </td>
          <td style={styles.inner}>
            <div style={{...styles.signature, ...styles.name}}>{name}</div>
            <div style={{...styles.signature, ...styles.title}}>{title}</div>
            <div style={{...styles.signature, ...styles.social}}>
              <a style={styles.link} href="https://www.instagram.com/lacapsulecreative/" target="_blank"><img src={instagramIcon} /></a>
              <a style={styles.link} href="https://www.facebook.com/lacapsulecreative/" target="_blank"><img src={facebookIcon} /></a>
              <a style={styles.link} href="https://www.linkedin.com/company/lacapsulecreative/" target="_blank"><img src={pinterestIcon} /></a>
            </div>
            <div style={{...styles.signature, ...styles.url}}>
              <a style={{...styles.link, ...styles.urlLink}} href={url} target="_blank">{formatUrl(url)}</a>
            </div>
            <table style={styles.contact}>
              <tr>
                <td>
                  <div style={{...styles.signature, ...styles.address}}>
                    <a style={{...styles.link, ...styles.addressLink}} href={addressLink(address)} target="_blank">{address}</a>
                  </div>
                </td>
                <td>
                  <div style={{...styles.signature, ...styles.telephone}}>
                    <a style={{...styles.link, ...styles.telephoneLink}} href={'tel:' + telephone}>{formatTelephone(telephone)}</a>
                  </div>
                  <div style={{...styles.signature, ...styles.email}}>
                    <a style={{...styles.link, ...styles.emailLink}} href={'mailto:' + email}>{email}</a>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    );
  }
}
  
export default CapsuleCreative;