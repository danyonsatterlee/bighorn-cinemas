import React from "react";

import autoBind from 'react-autobind';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/"
import ScheduleMap from "../components/scheduleMap.js";


    class ScheduleCon extends React.Component{
           componentWillMount(){
        this.props.loadData();
        
    }
 
    render(){

    
        return(
         <div className="row" id="schedule">
           <h1 className="text-center now-playing">Schedule</h1>
            <hr/>
            <ScheduleMap items={this.props.items}/>

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

export default connect(mapStateToProps, mapDispatchersToProps)(ScheduleCon );