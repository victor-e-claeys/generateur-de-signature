import React from 'react';

const colors = {
  primary: '#333',
  black: '#000000'
}

const fonts = {
  helvetica: "Helvetica, sans-serif"
}

const iconHeight = 16;

const styles = {
  container: {
    textAlign: 'left'
  },
  signature:{
    color: colors.black,
    fontFamily: fonts.helvetica,
    fontSize: 12,
    textDecoration: 'none',
    margin: 0,
    padding: 0
  },
  inner: {
    paddingTop: 8,
    width: 400,
    verticalAlign:'top'
  },
  table:{
    borderWidth: 0
  },
  logo:{
    paddingTop: 8,
    paddingRight: 8,
    textAlign: 'left',
    verticalAlign:'top'
  },
  name: {
    borderTopColor: colors.black,
    borderTopWidth: 0,
    borderTopStyle: 'solid',
    color: colors.primary,
    display: 'inline-block',
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 20,
    fontWeight: 700,
  },
  title: {
    fontSize: 16,
    fontWeight: 200,
    paddingBottom: 16,
  },
  number: {
    fontSize: 14,
    fontWeight: 300,
    paddingBottom: 4
  },
  link:{
    color: colors.primary,
    display: 'inline-block',
    fontSize: 14,
    fontWeight: 'bold'
  }
}

class ArkiDesign extends React.Component {

  componentWillMount(){
    const {setEditableFields} = this.props;
    if(setEditableFields){
      setEditableFields(['name', 'title', 'mobile'])
    }
  }

  addressLink = address => {
    return 'https://www.google.com/maps/?q=' + encodeURIComponent(address);
  }

  formatTelephone = (phoneNumber, extension = null) => {
    const number = this.numbersOnly(phoneNumber);
    return <span><span>{number.substr(0, 3)}.{number.substr(3, 3)}.{number.substr(6, 4)}</span></span>;
  }

  numbersOnly = string => string.match(/\d+/g).join('')

  render(){
    const {formatTelephone, numbersOnly} = this;
    const {name, title, mobile, extension, language, getImage} = this.props;
    return(
        <table className="signature" style={{...styles.table, ...styles.signature, ...styles.container}}>
          <tr>
            <td className="logo" style={styles.logo}>
              <a style={{...styles.signature, ...styles.link}} href="https://arki3.design"><img src={getImage('arki-design-logo-2022-v4.png')} width={120} /></a>
            </td>
            <td style={styles.inner}>
              <p style={{...styles.signature, ...styles.name}}>{name.toUpperCase()}</p>
              <p style={{...styles.signature, ...styles.title}}>{title}</p>
              <p style={{...styles.signature, ...styles.number}}>{mobile ? formatTelephone(mobile) : '514.992.6858'}</p>
              <p style={{...styles.signature, ...styles.links}}>
                <a target="_blank" href="https://arki3.design" style={{...styles.signature}}><img height={iconHeight} src={getImage('web.png')} /></a>&nbsp;&nbsp;
                <a target="_blank" href="https://www.facebook.com/ARKIdesigninc" style={{...styles.signature}}><img height={iconHeight} src={getImage('facebook.png')} /></a>&nbsp;&nbsp;
                <a target="_blank" href="https://www.instagram.com/arkidesign.inc" style={{...styles.signature}}><img height={iconHeight} src={getImage('instagram.png')} /></a>&nbsp;&nbsp;
              </p>
            </td>
          </tr>
        </table>
    );
  }
}
  
export default ArkiDesign;