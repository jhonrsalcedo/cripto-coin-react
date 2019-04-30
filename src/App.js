import React, { Component } from 'react';
import imagen from './img/cryptomonedas.png';
import './css/app.css';
import FormCrypto from './components/FormCrypto';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <img src={imagen} alt="imagen" className="logotipo"/>
          </div>
          <div className="one-half column">
          <h1>Criptomonedas</h1>
           <FormCrypto />
          </div>

        </div>


      </div>
    );
  }

}

export default App;
