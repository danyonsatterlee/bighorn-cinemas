import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/";
import thunk from "redux-thunk";

import NavbarBigHorn from "./containers/navbar.js";
import Slider from "./containers/header.js";
import Prices from "./containers/prices.js";
import NowPlaying from "./containers/nowplaying.js";
import ScheduleCon from "./containers/schedule-container.js";
import Contact from "./containers/contact.js";


const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component{

    render(){
        //Navigation info
        let navLinks=[
            {
              title:"Now Playing",
              url:"#now-playing"
            },
            {
              title: "Schedule",
              url: "#schedule"
            },
            {
              title: "Pricing",
              url:"#pricing"
            },
            {
              title: "Contact",
              url: "#contact"
            },
              {
              title: "Buy Tickets",
              url:"http://45018.formovietickets.com:2235/"
            },
              {
              title: "Buy Gift Cards",
              url:"https://45018.formovietickets.com:2235/app/rtsweb/gift"
            }
          ];
          //Carousel Info
          let sliders=[
            {
              headline:"Now Playing",
              image:"#now-playing"
            },
            {
              headline: "Schedule",
              image: "#schedule"
            },
            {
              headline: "Pricing",
              image:"#pricing"
            }
          
          ]; 
        return(
          <div>
          <NavbarBigHorn links={navLinks}/>
<div className="container-fluid">
    
    <Slider sliders={sliders}/>
    <NowPlaying/>
    <Prices/>
    <ScheduleCon />
    <Contact/>
</div>
</div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));

