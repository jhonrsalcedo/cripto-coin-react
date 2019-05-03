import React, { Component } from 'react';
import axios from 'axios';
import Cryptocoin from './Cryptocoin';
import Error from './Error';
class FormCrypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptoCoins:[],
            coin:'',
            cryptocoin:'',
            error: false
        }
    }
//para mejorar el performance de la app utilizamos el componentWilMount, este estaria llamando la api antes de que cargue el componente
// este llamado sera asincrono async
       async componentWillMount(){
        const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

        //para hacer el llamado o peticion
        await axios.get(url)
        .then(response => {
            this.setState({
                cryptoCoins: response.data.Data
            })
            //console.log(response)
        })
    }

    //este metodo se ejecuta cada vez que el usuario elige una opcion del select
    handleSelectValue = (e) =>{
        //console.log(e.target.name)
       this.setState({
        [e.target.name]:e.target.value
       })
       // o utilizar esta forma
      /*  const {name, value} = e.target;
       this.setState({
           [name]:value
       }) */
    }

    quoteCoins = (e) =>{
        e.preventDefault();
        //validar que el usuario haya elegido
        //aplicamos destructuring para acceder a los datos
        const {coin, cryptocoin} = this.state;
        if (coin === '' || cryptocoin === '') {
            this.setState({
                error: true
            }, 
            //callback para eliminar el mensaje temporal de error
            () => {
                setTimeout(() => {
                    this.setState({
                        error: false
                    })
                }, 3000);
            });
            // evitar se ejecute nuevamente
            return;
        }
        //crear el objeto
        const quoteForm = {
            coin,
            cryptocoin
        }

        //eviar los datos al componente App.js para cotizar
        this.props.quoteCryptocoin(quoteForm);
    }
    render() {
        const errorMessage= (this.state.error) ? <Error  errorMessage="Ambos campos son Obligatorio"/>
        : '';
        return (
            <form onSubmit={this.quoteCoins}>
            {errorMessage}
                <div className="row">
                    <label>Elige tu Moneda</label>
                    <select name="coin" onChange={this.handleSelectValue}
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
                        <select name="cryptocoin" onChange={this.handleSelectValue}
                         className="u-full-width">
                            <option value="">Elige tu criptomoneda</option>
                            {Object.keys(this.state.cryptoCoins).map(key =>(
                                <Cryptocoin 
                                    key={key}
                                    cryptoCoins={this.state.cryptoCoins[key]}
                                />
                            ))}
                        </select>
                    </div>
                </div>
                <input className="button-primary u-full-width" type="submit" value="Cotizar" />
            </form>
        );
    }
}

export default FormCrypto;