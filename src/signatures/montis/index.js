import React from 'react';
import logo from 'https://victor-e-claeys.github.io/generateur-de-signature/assets/pic.jpg';
import facebookIcon from 'https://victor-e-claeys.github.io/generateur-de-signature/assets/facebook.png';
import instagramIcon from 'https://victor-e-claeys.github.io/generateur-de-signature/assets/instagram.png';

class Montis extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const {setEditableFields} = this.props;
    if(setEditableFields){
      setEditableFields(['name', 'title', 'email', 'telephone', 'mobile'])
    }
  }

  render(){
    const {email, name, title, telephone, mobile} = this.props;
    return(
      <table cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr>
            <td valign="middle" style={{paddingRight: 16}}>
              <img src={logo} width={130} border={0} />
            </td>   
            <td style={{borderLeft:'solid 1px #000', paddingLeft:16}}>
              <p style={{fontFamily: '"Raleway", Arial, Helvetica, sans-serif', marginTop: '0px', marginBottom:'12px'}}>
                <span style={{color: '#4f2b82', fontSize: '16px', textTransform: 'uppercase', fontWeight: 700}}>
                  {name}
                </span>
                <br />
                <span style={{fontSize: '14px', color: '#58595b', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                  {title}
                </span>
              </p>
              <p style={{fontSize: '14px', color: '#58595b', fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '0px', marginBottom:'6px', lineHeight: '1'}}>
                Tél. {telephone}
                {
                  mobile ? 
                  <span>&nbsp;&nbsp;<span style={{color: '#4f2b82', textDecoration: 'none'}}>—</span>&nbsp;&nbsp;Cell. {mobile}</span> : 
                  null
                }
              </p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', color: '#4f2b82', fontSize: '14px', marginTop: '0px', marginBottom:'6px'}}>
                {/* nom de l'association */}
                <a href="https://asmontis.com" style={{color: '#4f2b82', textDecoration: 'none'}}>
                  Nous sommes asmontis.com 
                </a>
              </p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px', color: '#58595b', marginBottom: '10px', marginTop: '6px'}}>  
                1780, rue Roberval, Saint-Bruno-de-Montarville, QC  J3V 3R3 
              </p>
              <p style={{marginBottom: 0, marginTop: '10px'}}>
                {/* FACEBOOK */}
                <a href="https://www.facebook.com/ASMONTIS" target="_blank">
                  <img id="klambi2" src={facebookIcon} alt="facebook" border={0} align="top" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                {/* INSTAGRAM */}
                <a href="https://www.instagram.com/soccerasmontis/" target="_blank"> 
                  <img id="klambi3" src={instagramIcon} alt="instagram" border={0} align="top" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </td>
          </tr>
        </tbody></table>     
    );
  }
}
  
export default Montis;