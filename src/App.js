import React, {Component} from 'react';
import Header from './components/Header';

import './css/App.css';

class App extends Component {
  constructor(props){
    super(props);

  }
    render(){
      return (
          <div>
            <Header 
                title='Cryptomoneda'
                  />
          </div>
      );
    }   
  
}

export default App;
