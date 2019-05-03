import React, { Component } from 'react';
import imagen from './img/cryptomonedas.png';
import './css/App.css';
import FormCrypto from './components/FormCrypto';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result:{},
      coinSelect:'',
      cryptoSelect:''

    }
  }
  //se crea un metodo que cotize los dados select desde formCrypto
  quoteCryptocoin = (quoteForm) =>{
    //obtener los valores 
    const {coin, cryptocoin} = quoteForm;

    //realizar consulta con axios a la api
    const url =`https://min-api.cryptocompare.com/data/price?fsym=${cryptocoin}&tsyms=${coin}`
    console.log(url)
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
           <FormCrypto 
           //se recomienda utilizar el nombre del props igual que el metodo para evitar confusion 
            quoteCryptocoin={this.quoteCryptocoin}
           />
          </div>

        </div>


      </div>
    );
  }

}

export default App;
