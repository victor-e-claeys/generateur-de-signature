import React from 'react';
import logo from './assets/pic.jpg';
import facebookIcon from './assets/facebook.png';
import instagramIcon from './assets/instagram.png';

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
        <tbody><tr>
            <td height={20} colSpan={3}>
              <p style={{fontSize: '16px', color: '#000000', fontFamily: '"Raleway", Arial, Helvetica, sans-serif', marginBottom: '30px', marginTop: '0px', fontWeight: 700, letterSpacing: '1px'}}>
                {name}
                <br />
                <span style={{fontSize: '13px', color: '#4f2b82', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'normal', letterSpacing: 0}}>
                  {title}
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td width={121} rowSpan={3} valign="top">
              <p>
                <img src={logo} alt="facebook" name="klambi2" border={0} align="bottom" id="klambi2" />
              </p>
            </td>   
            <td width={27} />
            <td>
              <p style={{fontSize: '14px', color: '#58595b', fontFamily: 'Arial, Helvetica, sans-serif', marginBottom: '5px', marginTop: '5px', lineHeight: '1.3'}}>
                Téléphone:  {telephone}
                {
                  mobile ? 
                  <span>&nbsp;<span style={{color: '#4f2b82', textDecoration: 'none'}}>—</span>&nbsp;Cellulaire {mobile}</span> : 
                  null
                }
                <br />
              </p>
            </td>  
          </tr>
          <tr>
            <td width={27} />
            <td height={27} valign="middle" bgcolor="#4f2b82">
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', color: '#fff', fontSize: '13px'}}>
                {/* nom de l'association */}
                &nbsp;&nbsp;ASSOCIATION DE SOCCER MONTIS 
              </p>
            </td>
          </tr>
          <tr>
            <td width={27} />
            <td><p style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px', color: '#58595b', marginBottom: '10px', marginTop: '6px'}}>  
                Courriel:
                <a href={'mailto:' + email} style={{color: '#4f2b82', textDecoration: 'none'}}>
                  {email}
                </a>
                &nbsp;&nbsp;
                <span style={{color: '#4f2b82', textDecoration: 'none'}}>
                  — 
                </span>
                &nbsp; 
                {/* SITE WEB  */}
                <a href="https://asmontis.com" style={{color: '#4f2b82', textDecoration: 'none'}}>
                  www.asmontis.com
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td width={121} />
            <td width={27} />
            <td>
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