import React from 'react';

const logo = process.env.PUBLIC_URL + '/groupee5/assets/LOGO_FINAL.png';

const colors = {
  primary: '#000000',
  black: '#000000',
  grey: '#666666',
  lightgrey: '#bdbcbc'
}

const styles = {
  container: {
    borderTop: "dotted #ccc 1px",
    textAlign: 'left',
    padding: "20px 25px"
  },
  signature:{
    color: colors.black,
    fontFamily: "Helvetica, Arial, sans-serif"
  },
  logo:{
    borderRightWidth: "1px",
    borderRightStyle: "solid",
    borderRightColor: colors.lightgrey, 
    paddingRight: 30,
    textAlign: 'center',
    verticalAlign:'middle'
  },
  inner: {
    fontSize: "9pt",
    fontWeight: 'normal',
    paddingLeft: 30, 
  },
  name: {
    fontFamily: "Georgia, serif",
    fontSize: "26px",
    marginBottom: 4
  },
  title: {
    color: colors.grey,
    fontSize: "12px",
    fontStyle: 'italic',
    fontWeight: 300,
    marginBottom: 12
  },
  contact:{
    fontSize: "14px",
    marginBottom: "4px"
  },
  link: {
    color: colors.black,
    textDecoration: 'none'
  },
  rbq: {
    fontSize: "9px",
    paddingTop: "4px"
  }
}

class GroupeE5 extends React.Component {
  constructor(props){
    super(props);
    this.rbq = '5787-2756-01';
  }

  componentWillMount(){
    const {setEditableFields} = this.props;
    if(setEditableFields){
      setEditableFields(['name', 'title', 'email', 'telephone', 'extension', 'mobile'])
    }
  }

  addressLink = address => {
    return 'https://www.google.com/maps/?q=' + address;
  }

  formatTelephone = phoneNumber => {
    const number = this.numbersOnly(phoneNumber);
    return '(' + number.substr(0, 3) + ') ' + number.substr(3, 3) + '-' + number.substr(6, 4);
  }

  numbersOnly = string => string.match(/\d+/g).join('')

  render(){
    const {address, addressLink, formatTelephone, formatUrl, url} = this;
    const {name, title, telephone, email, mobile} = this.props;
    return(
      <table className="signature" style={{...styles.signature, ...styles.container}}>
        <tr>
          <td style={styles.logo}>
            <img src={logo} />
          </td>
          <td style={styles.inner}>
            <div style={{...styles.signature, ...styles.name}}>{name.toUpperCase()}</div>
            <div style={{...styles.signature, ...styles.title}}>{title}</div>
            <div style={{...styles.signature, ...styles.contact}}><a style={styles.link} href={'tel:+1' + this.numbersOnly(telephone)}>{'B: ' + formatTelephone(telephone)}</a></div>
            {
              mobile ?
              <div style={{...styles.signature, ...styles.contact}}><a style={styles.link} href={'tel:+1' + this.numbersOnly(mobile)}>{'C: ' + formatTelephone(mobile)}</a></div> :
              null
            }
            <div style={{...styles.signature, ...styles.contact}}><a style={styles.link} href={'mailto:' + email}>{email}</a></div>
            <div style={{...styles.signature, ...styles.rbq}}>RBQ: 5787-2756-01</div>
          </td>
        </tr>
      </table>
    );
  }
}
  
export default GroupeE5;