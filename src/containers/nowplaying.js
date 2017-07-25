import React from "react";

import autoBind from 'react-autobind';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/"
import NowPlayMap from "../components/nowplayMap.js";


    class NowPlaying extends React.Component{
           componentWillMount(){
        this.props.loadData();
        
    }
 
    render(){

    
        return(
         <div className="row" id="now-playing">
           <h1 className="text-center now-playing">NOW PLAYING</h1>
            <hr/>
            <NowPlayMap items={this.props.items}/>

      </div>
               

        );
    } 
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchersToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(NowPlaying);