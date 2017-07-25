import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/";
import thunk from "redux-thunk";

import Home from './containers/home.js'


const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component{

    render(){
        //Navigation info
        
        return(
          <div>
          
    
    
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
        
  
        </Switch>
      </BrowserRouter>
</div>

        );
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));

