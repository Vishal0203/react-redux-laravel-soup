import React from 'react'
import {AppBar, FlatButton} from 'material-ui';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  get styles() {
    return {
      logo: {
        margin: '14px 10px 0 -8px'
      }
    }
  };

  render() {
    return (
      <div>
        <AppBar
          title="Soup Maker"
          className="navbar"
          iconStyleLeft={this.styles.logo}
          iconElementLeft={<img style={{width: 50}} src={require('Images/logo.png')}/>}
        />
        <div className="navbar-highlight"/>
      </div>
    );
  }
}

export default Navbar;
