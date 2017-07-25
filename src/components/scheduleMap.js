import React from "react";
import ScheduleComp from "./scheduleComp.js";



class ScheduleMap extends React.Component{

 genSchedule() {
    return this.props.items.map((item, index) => {
      return <ScheduleComp key={item.schedule + index} index={index} item={item}/>
    })
  }    render(){
        return(
<div> {this.genSchedule()}

</div>
        );
    }
}

export default ScheduleMap;