import React from "react";
// import Times from "./timesComp.js";

class NowPlayingComp extends React.Component {
   getShow() {
    return this.props.item.showtimes.map((item, index) => {
      return <li className="times" key={item.formattedTime + index}> 
          {item.formattedTime}
      </li>
    })
   }
    render() {

        return (
            <div>
                <div className="col-sm-12 col-md-3 col-md-offset-1 top">
                    <img
                        className="poster center-block img-responsive"
                        src={this.props.item.movie.posterUrl}/>

                </div>
                <div className="col-sm-12 col-md-2 pull-left top">
                    <h2 >{this.props.item.movie.name}</h2>
                    <ul >
                        <li className="info">{this.props.item.movie.lengthFriendly}</li>
                        <li className="info">|</li>
                        <li className="info">{this.props.item.movie.rating}</li>
                    </ul>

                    <ul >
 {this.getShow()}
                     
                    </ul>

                    <ul className="pull-left">
                        <li className="info">
                            <a href={this.props.item.movie.trailerUrl}>Trailer</a>
                        </li>
                        <li className="info">|</li>
                        <li className="info">
                            <a target="_blank" href={this.props.item.movie.ticketUrl}>Buy Tickets</a>
                        </li>
                    </ul>
                    <p className="showing info">{this.props.item.movie.genre}</p>

                </div>
            </div>
            

        );
    }
}

export default NowPlayingComp;