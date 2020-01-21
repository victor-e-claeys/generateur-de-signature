import React from 'react';

const logo = process.env.PUBLIC_URL + '/victorconceptum/logo.png';
const facebookIcon = process.env.PUBLIC_URL +  '/capsulecreative/assets/fb.png';
const linkedinIcon = process.env.PUBLIC_URL +  '/capsulecreative/assets/linkedin.png';

const colors = {
  primary: '#7263A8',
  grey: '#333333'
}

const styles = {
  container: {
    borderTop: "dotted #ccc 1px",
    textAlign: 'left',
    paddingTop: 10
  },
  signature:{
    color: colors.grey,
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

class VictorConceptum extends React.Component {
  constructor(props){
    super(props);
    this.url = 'https://www.victorconceptum.com';
  }

  componentWillMount(){
    const {setEditableFields} = this.props;
    if(setEditableFields){
      setEditableFields([ 'name', 'title', 'email' ]);
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
    const {name, title, email, telephone} = this.props;
    return(
      <div id="sig-container" style={{marginTop: '15px', paddingTop: '6px', borderTop: '1px dashed #ddd', width: 500}}>
        <div style={{float: 'left', margin: '2px 5px 5px 0px', paddingRight: '5px', display: 'block'}} id="photoWrapper">
          <img src={logo} width={150} height={120} /> </div>
        <div style={{marginTop: '0px', marginLeft: '74px', width: '300px'}} id="sigDetailsWrapper">
          <p style={{fontFamily: 'Helvetica, sans-serif', fontSize: '14px', lineHeight: '18px', color: '#333', marginTop: 0, marginLeft: 0, paddingLeft: 0}}>
            <strong style={{color: '#5232B7'}}>
              <span id="sigName">{name}</span>
            </strong>
            <span id="sigTitle"> // {title}</span>
            <br />
            <span style={{backgroundColor: '#8052BF', color: '#FFFFFF', fontSize: '12px', paddingTop: '1px', paddingBottom: '1px'}}>&nbsp;Apprendre. <strong>Entreprendre.</strong> Accomplir.&nbsp;</span><br />
            <span>
              <a href={'mailto:' + email} id="sigEmail" style={{color: '#906CF4'}}>{email}</a>
            </span>
            <br />
            <span>
              <a href={url} id="sigWebsite" style={{color: '#906CF4'}} rel="nofollow">{formatUrl(url)}</a>
            </span>
          </p>
          <p style={{lineHeight: '14px', marginTop: 0, marginLeft: 0, paddingLeft: 0}}>
            <a href="https://www.facebook.com/VictorConceptumInc/"><img src={facebookIcon} width={24} /></a>&nbsp;
            <a href="https://www.linkedin.com/in/monstrategeweb/"><img src={linkedinIcon} width={24} /></a>
          </p>
        </div>
      </div>
    );
  }
}
  
export default VictorConceptum;