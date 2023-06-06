import React from 'react';
import logo from 'https://victor-e-claeys.github.io/generateur-de-signature/assets/logo.png';
import facebookIcon from 'https://victor-e-claeys.github.io/generateur-de-signature/assets/facebook.png';
import instagramIcon from 'https://victor-e-claeys.github.io/generateur-de-signature/assets/instagram.png';
import pinterestIcon from 'https://victor-e-claeys.github.io/generateur-de-signature/assets/pinterest.png';

const colors = {
  primary: '#9e6d4f',
  black: '#000000'
}

const styles = {
  container: {
    borderTop: "dotted #ccc 1px",
    textAlign: 'left'
  },
  signature:{
    color: colors.black,
    fontFamily: "'Times New Roman', Times, serif",
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
    fontSize: "12pt",
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
    marginBottom: 4
  },
  url: {
    margin: '12px 0 8px'
  },
  urlLink: {
    color: colors.primary,
    fontWeight: 'bold'
  },
  address: {
    marginBottom: 8
  },
  social: {
    borderTop: '1px solid #949494',
    paddingTop: 4
  }
}

class BlancMarine extends React.Component {
  constructor(props){
    super(props);
    this.url = 'https://www.blancmarine.ca';
    this.address = '1780, boul. St-Joseph, Montréal (Lachine), H8S 2N2';
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
    return number.substr(0, 3) + '.' + number.substr(3, 3) + '.' + number.substr(6, 4);
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
            <div style={{...styles.signature, ...styles.telephone}}>
              <span style={styles.prefix}>T</span>
              <a style={{...styles.link, ...styles.telephoneLink}} href={'tel:' + telephone}>{formatTelephone(telephone)}</a>
            </div>
            <div style={{...styles.signature, ...styles.email}}>
              <span style={styles.prefix}>E</span>
              <a style={{...styles.link, ...styles.emailLink}} href={'mailto:' + email}>{email}</a>
            </div>
            <div style={{...styles.signature, ...styles.url}}>
              <a style={{...styles.link, ...styles.urlLink}} href={url} target="_blank">{formatUrl(url)}</a>
            </div>
            <div style={{...styles.signature, ...styles.address}}>
              <a style={{...styles.link, ...styles.addressLink}} href={addressLink(address)} target="_blank">{address}</a>
            </div>
            <div style={{...styles.signature, ...styles.social}}>
              <a style={styles.link} href="https://www.instagram.com/blancmarineliving/" target="_blank"><img src={instagramIcon} /></a>
              <a style={styles.link} href="https://www.facebook.com/blancmarineliving/" target="_blank"><img src={facebookIcon} /></a>
              <a style={styles.link} href="https://www.pinterest.fr/melaniecherrier/" target="_blank"><img src={pinterestIcon} /></a>
            </div>
          </td>
        </tr>
      </table>
    );
  }
}
  
export default BlancMarine;