import React from "react";

class ScheduleComp extends React.Component {
      getShow() {
    return this.props.item.showtimes.map((item, index) => {
      return <span classNameName="day-item-time" key={item.formattedTime + index}> 
          {item.formattedTime}
      </span>
    })
   }

       getShowBlock() {
    return this.props.item.showtimes.map((item, index) => {
    
      return <div className="day-item">
            <span className="day-item-title">{this.props.item.movie.name}</span>
            <span className="day-item-time"> {this.getShow()}</span>
          </div>
    })
   }
    render() {
        

        return (


    <div className="day">
         <p class="day-name">{this.props.days} </p>
       
          <p className="day-date">june 19</p>
          {this.getShowBlock()}
        </div>

        );
    }
}

export default ScheduleComp;