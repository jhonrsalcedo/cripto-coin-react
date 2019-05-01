import React, { Component } from 'react';
import axios from 'axios';

class FormCrypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptoCoins:[]
        }
    }
//para mejorar el perform de la app utilizamos el componentWilMount, este estaria llamando la api antes de que cargue el componente
// este llamado sera asincrono async
       async componentWillMount(){
        const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

        //para hacer el llamado o peticion
        await axios.get(url)
        .then(response => {
            console.log(response)
        })
    }
    render() {
        return (
            <form>
                <div className="row">
                    <label>Elige tu Moneda</label>
                    <select
                        className="u-full-width">
                        <option value="">Elige tu moneda</option>
                        <option value="USD">Dolar Estadounidense</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="GBP">Libras</option>
                        <option value="EUR">Euros</option>
                        <option value="COP">Peso Colombiano</option>
                    </select>
                </div>

                <div className="row">
                    <div>
                        <label>Elige tu Criptomoneda</label>
                        <select className="u-full-width">
                            <option value="">Elige tu criptomoneda</option>
                        </select>
                    </div>
                </div>
                <input className="button-primary u-full-width" type="submit" value="Cotizar" />
            </form>
        );
    }
}

export default FormCrypto;