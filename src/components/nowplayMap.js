import React from "react";
import NowPlayingComp from "./nowplayingComp.js";



class NowPlayMap extends React.Component{

 genPlay() {
    return this.props.items.map((item, index) => {
      return <NowPlayingComp key={item.movie + index} index={index} item={item}/>
      
    })
  }    render(){
        return(
<div> {this.genPlay()}

</div>
        );
    }
}

export default NowPlayMap;