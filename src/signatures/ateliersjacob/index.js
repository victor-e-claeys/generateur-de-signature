import React from 'react';
const queryString = require('query-string');

/*
import border from './assets/border.png';
import logoAJ from './assets/ateliersjacob.png';
import logoAM from './assets/logo-airmiles.jpg';
import logoT from './assets/tendances.png';
import facebookIcon from './assets/facebook.png';
import instagramIcon from './assets/instagram.png';
*/

const border = process.env.PUBLIC_URL + '/ateliersjacob/assets/border.png';
const logoAJ = process.env.PUBLIC_URL +  '/ateliersjacob/assets/ateliersjacob.png';
const logoAM = process.env.PUBLIC_URL +  '/ateliersjacob/assets/logo-airmiles.jpg';
const logoT = process.env.PUBLIC_URL +  '/ateliersjacob/assets/tendances.png';
const facebookIcon = process.env.PUBLIC_URL +  '/ateliersjacob/assets/facebook.png';
const instagramIcon = process.env.PUBLIC_URL +  '/ateliersjacob/assets/instagram.png';
const noel = process.env.PUBLIC_URL +  '/ateliersjacob/assets/noel.png';

const colors = {
  primary: '#c37415',
  black: '#000000'
}

const Table = ({children, ...props}) => 
  <table cellpadding="0" cellspacing="0" border="0" {...props}>{children}</table>

const styles = {
  container: {
    borderTop: "dotted #ccc 1px",
    textAlign: 'left',
    paddingTop: 10
  },
  signature:{
    color: colors.black,
    fontFamily: "Calibri, sans-serif"
  },
  logo:{
    textAlign: 'center',
    verticalAlign:'bottom'
  },
  inner: {
    fontSize: "9pt",
    fontWeight: 'normal',
  },
  name: {
    color:'#231F20',
    fontFamily: "Georgia, serif",
    fontSize: 16,
    textAlign: 'left'
  },
  title: {
    color: '#636466',
    fontFamily: "Georgia, serif",
    fontStyle: 'italic',
    fontSize: 14,
    lineHeight:1.2
  },
  prefix:{
    color: colors.primary,
    display: 'inline-block',
    fontWeight: 'bold',
    marginRight: 12
  },
  link: {
    textDecoration: 'none',
    color: colors.black,
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
    color: '#231F20',
    textAlign:'right',
    fontSize: 14
  },
  slogan:{
    color: '#636466',
    fontSize:12,
    paddingBottom: 8,
    textAlign: 'center',
    textTransform: 'uppercase',
    verticalAlign: 'bottom'
  },
  footer: {
    backgroundColor:'#636466',
    color:'white',
    fontSize:12,
    paddingTop:6,
    paddingBottom:6,
    textAlign:'center'
  },
  email: {
    paddingLeft: 10,
    whiteSpace: 'nowrap'
  }
}

class AteliersJacob extends React.Component {
  constructor(props){
    super(props);
    this.table = {
      width: 500,
      innerWidth: 490
    }
    this.qs = queryString.parse(window.location.search);
  }

  componentWillMount(){
    const {setEditableFields} = this.props;
    let fields = ['name', 'title', 'email', 'telephone', 'extension', 'mobile'];
    if(this.qs.v == '2020')
      fields = fields.concat(['title2', 'title3']);
    if(setEditableFields){
      setEditableFields(fields);
    }
  }

  render(){
    const {formatTelephone, table} = this;
    const {email, name, title, title2, title3, telephone, extension, mobile} = this.props;
    const phoneNumber = mobile ? mobile : telephone;
    return(
      <Table className="signature" width={table.width} style={{...styles.signature, ...styles.container}}>
        <tr>
          <td align="center">
            <Table width={table.innerWidth}>
              <tr>
                <td style={{...styles.signature, ...styles.name}}>
                  {name}
                </td>
              </tr>
            </Table>
          </td>
        </tr>
        <tr>
          <td align="center">
            <Table width={table.innerWidth}>
              <tr>
                <td style={{verticalAlign:'top'}}>
                  <div style={{...styles.signature, ...styles.title}}>{title}</div>
                  {
                    this.qs.v == '2020' ?
                    <div>
                      <div style={{...styles.signature, ...styles.title}}>{title2}</div>
                      <div style={{...styles.signature, ...styles.title}}>{title3}</div>
                    </div> :
                    null
                  }
                </td>
                <td style={styles.contact}>
                  <div style={{...styles.signature, ...styles.email}}>
                    <a style={{...styles.link, ...styles.emailLink}} href={'mailto:' + email}>{this.qs.v == '2020' ? <strong>E. </strong> : null}{email}</a>
                  </div>
                  <div style={{...styles.signature, ...styles.telephone}}>
                    {this.qs.v == '2020' ? <strong>T. </strong> : (mobile ? 'Cellulaire' : 'Bureau')}<a style={{...styles.link, ...styles.telephoneLink}} href={'tel:' + phoneNumber.match(/\d+/g).join('')}>{phoneNumber + (extension && !mobile ? ' #' + extension : '')}</a>
                  </div>
                </td>
              </tr>
            </Table>
          </td>
        </tr>
        <tr>
          <td>
            &nbsp;
          </td>
        </tr>
        <tr>
          <td>
            <Table width={table.innerWidth}>
              <tr>
                <td width="49%" style={styles.logo}>
                  <a href="https://www.ateliersjacob.com/" target="_blank"><img src={logoAJ} /></a><br/><br/>
                  <a href="https://www.facebook.com/AteliersJacob/" target="_blank"><img src={facebookIcon} /></a>&nbsp;&nbsp;&nbsp;
                  <a href="https://www.instagram.com/ateliersjacob/" target="_blank"><img src={instagramIcon} /></a>
                </td>
                <td width="2%" align="center">
                  <img src={border} />
                </td>
                <td width="49%" style={styles.logo}>
                  <a href="http://www.tendances-concept.com/" target="_blank"><img src={logoT} /></a><br/>
                  <a href="https://www.facebook.com/tendancesconcept/" target="_blank"><img src={facebookIcon} /></a>&nbsp;&nbsp;&nbsp;
                  <a href="https://www.instagram.com/tendances.concept/" target="_blank"><img src={instagramIcon} /></a>
                </td>
              </tr>
            </Table>
          </td>
        </tr>
        <tr>
          <td align="center" style={{paddingBottom:5}}>
                {
                  this.qs.v != '2020' ? 
                  <Table width={table.innerWidth}>
                    <tr>
                      <td width={60}>
                        <img src={logoAM} />
                      </td>
                      <td style={styles.slogan}>
                        Fabricant de bonheur 24 | 7 | 365
                      </td>
                      <td width={60}>
                      </td>
                    </tr>
                  </Table> 
                  :
                  <Table width={table.innerWidth}>
                    <tr>
                      <td width={60}>
                        <img src={logoAM} />
                      </td>
                      <td>
                        <Table width="100%">
                          <tr>
                            <td style={styles.footer}>
                              Montréal&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                              Longueuil&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                              Saint-Calixte&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                              Saint-Jérôme&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                              Calgary
                            </td>
                          </tr>
                        </Table> 
                      </td>
                    </tr>
                  </Table> 
                }
          </td>
        </tr>
        {
          this.qs.noel ?
          <tr>
            <td align="center" style={{paddingTop:10}}>
              <img alt="Joyeuses fêtes à notre merveilleuse clientèle" src={noel} /><br />
              Veuillez prendre note que nous serons fermés<br />
              du 21 décembre au 5 janvier inclusivement.
            </td>
          </tr> :
          null
        }
      </Table>
    );
  }
}
  
export default AteliersJacob;