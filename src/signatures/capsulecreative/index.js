import React from 'react';

const logo = process.env.PUBLIC_URL + 'https://victor-e-claeys.github.io/generateur-de-signature/capsulecreative/assets/photo_profil.png';
const facebookIcon = process.env.PUBLIC_URL +  'https://victor-e-claeys.github.io/generateur-de-signature/capsulecreative/assets/fb.png';
const instagramIcon = process.env.PUBLIC_URL +  'https://victor-e-claeys.github.io/generateur-de-signature/capsulecreative/assets/insta.png';
const linkedinIcon = process.env.PUBLIC_URL +  'https://victor-e-claeys.github.io/generateur-de-signature/capsulecreative/assets/linkedin.png';
const twitterIcon = process.env.PUBLIC_URL +  'https://victor-e-claeys.github.io/generateur-de-signature/capsulecreative/assets/twitter.png';

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
    this.url = 'https://lacapsulecreative.com';
    this.address = '100 Rue Gaston-Dumoulin,\nsuite 102, Blainville, QC J7C 0A3';
  }

  componentWillMount(){
    const {setEditableFields} = this.props;
    if(setEditableFields){
      setEditableFields(['name', 'title', 'telephone'])
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
    const {name, title, telephone} = this.props;
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
              <a style={styles.link} href="https://www.instagram.com/lacapsulecreative/" target="_blank"><img width="20" src={instagramIcon} /></a>&nbsp;&nbsp;
              <a style={styles.link} href="https://www.facebook.com/lacapsulecreative/" target="_blank"><img width="20" src={facebookIcon} /></a>&nbsp;&nbsp;
              <a style={styles.link} href="https://www.linkedin.com/company/lacapsulecreative/" target="_blank"><img width="20" src={linkedinIcon} /></a>&nbsp;&nbsp;
              <a style={styles.link} href="https://twitter.com/lacapsulecrea" target="_blank"><img width="20" src={twitterIcon} /></a>&nbsp;&nbsp;
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
                  <div style={{...styles.signature, ...styles.telephone}}>
                    <a style={{...styles.link, ...styles.telephoneLink}} href={'tel:+18778206258'}>(877) 820-6258</a>
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