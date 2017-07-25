import React from "react";
import ScheduleComp from "./scheduleComp.js";
class ScheduleMap extends React.Component {
 genSchedule() {
   //instead not items do showtimes
    return this.props.items.map((item, index) => {
      return <ScheduleComp days ={this.props.days} key={item.movie + index} index={index} item={item}/>
      
    })
  }    render(){
        return(
<div> {this.genSchedule()}

</div>
        );
    }
}

export default ScheduleMap;