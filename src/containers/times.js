import React from "react";

import autoBind from 'react-autobind';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/"
import TimesMap from "../components/timesmap.js";


    class Times extends React.Component{
           componentWillMount(){
        this.props.loadData();
        
    }
 
    render(){

    
        return(

        
            <TimesMap items={this.props.items}/>


               

        );
    } 
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchersToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(Times);