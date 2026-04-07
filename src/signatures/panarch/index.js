import React from 'react';

const logo = 'https://panarch.design/email_signature_images/LOGO_BLANC.png';

const styles = {
  table: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#ffffff',
    padding: '0px',
    color: '#000000',
    fontFamily: "'Montserrat', Arial, sans-serif"
  },
  logoCell: {
    width: '37%',
    textAlign: 'center',
    verticalAlign: 'bottom',
    paddingBottom: 25
  },
  logoImg: {
    width: '100%'
  },
  infoCell: {
    padding: 15,
    fontSize: 14,
    lineHeight: '18px'
  },
  infoParagraph: {
    fontSize: '0.9em',
    lineHeight: '20px',
    letterSpacing: 0,
    padding: 0,
    margin: 0
  },
  link: {
    textDecoration: 'none',
    color: '#000000',
    verticalAlign: 'top'
  },
  disclaimer: {
    fontSize: 8,
    textAlign: 'justify',
    margin: 0
  }
};

class Panarch extends React.Component {
  componentWillMount(){
    const {setEditableFields} = this.props;
    if(setEditableFields){
      setEditableFields(['name', 'title', 'email', 'telephone'])
    }
  }

  formatTelephone = phoneNumber => {
    const digits = phoneNumber.replace(/[^\d]/g, '');
    if(digits.length === 10){
      return digits.substr(0, 3) + '.' + digits.substr(3, 3) + '.' + digits.substr(6, 4);
    }
    return phoneNumber;
  }

  render(){
    const {name, title, email, telephone} = this.props;
    return(
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={styles.logoCell}>
              <img style={styles.logoImg} src={logo} alt="Panarch" />
            </td>
            <td style={styles.infoCell}>
              <p style={styles.infoParagraph}>
                <strong>{name}</strong><br/>
                {title}<br/><br/>
                51 rue Dufferin, Granby<br/>
                <a style={styles.link} href={'mailto:' + email}>{email}</a><br/>
                <a style={styles.link} href={'tel:' + telephone.replace(/[^\d]/g, '')}>{this.formatTelephone(telephone)}</a><br/>
                <a style={styles.link} href="https://www.panarch.design">panarch.design</a>
              </p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">
              <p style={styles.disclaimer}>
                Ce courriel et toute pièce jointe peuvent contenir des informations confidentielles et privilégiées destinées uniquement à l'usage du destinataire indiqué. Si vous recevez ce message par erreur, veuillez le supprimer immédiatement et nous en informer.
              </p>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default Panarch;
