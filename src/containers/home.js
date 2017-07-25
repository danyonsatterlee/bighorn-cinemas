import React from "react";
import NavbarBigHorn from "./navbar.js";
// import Slider from "./header.js";
import Prices from "./prices.js";
import NowPlaying from "./nowplaying.js";
// import ScheduleCon from "./containers/schedule-container.js";
import Contact from "./contact.js";




class Home extends React.Component{

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
        //   let sliders=[
        //     {
        //       headline:"25th Anniversary Sale",
        //       image:"poster.jpg"
        //     },
        //     {
        //       headline: "Schedule",
        //       image: "#schedule"
        //     },
        //     {
        //       headline: "Pricing",
        //       image:"#pricing"
        //     }
          
        //   ]; 

          //Days of week 
              let days=[
            {
              day: "Monday"
      
            },
               {
              day: "Tuesday"
      
            },
               {
              day: "Wednesday"
      
            },
               {
              day: "Thursday"
      
            },
                 {
              day: "Friday"
      
            },
                 {
              day: "Saturday"
      
            },
               {
              day: "Sunday"
      
            }
          ];
        return(
          <div>
          <NavbarBigHorn links={navLinks}/>
<div className="container-fluid">
    
    {/*<Slider sliders={sliders}/>*/}
    <NowPlaying/>
    <Prices/>
    {/*<ScheduleCon />*/}
    <Contact/>
</div>
</div>
        );
    }
}

export default Home;
