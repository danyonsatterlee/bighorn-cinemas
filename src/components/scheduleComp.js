import React from "react";

class ScheduleComp extends React.Component {
    render() {

        return (
 <div><p>{this.props.item.movie.schedule}</p></div>

        );
    }
}

export default ScheduleComp;