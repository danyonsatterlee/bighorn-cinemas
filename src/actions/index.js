import axios from "axios";

function convert (movies){
    let moviesByTime={};
    for(let i=0; i<movies.length;i++){
     
        for(let x=0; x<movies[i].showtimes.length; x++){
           
            let date=new Date(movies[i].showtimes[x].rawTime);
            let day = date.getDate();
            console.log(day);
            if(moviesByTime[day]===undefined){
                moviesByTime[day]=[]
            }
            moviesByTime[day].push(movies[i]);
        }
    } console.log(moviesByTime);
    //will be return
}

export function loadData(){
  
    return (dispatch)=>{
        return axios.get("http://bighorncinemas.net/api/v1/homepage").then((response)=>{
        dispatch(setData(response.data.currentAttractions));
        //   console.log(response.data)
          convert(response.data.currentAttractions) 
          
        }).catch((error) => {
            throw error;
        })

    }
}

export function setData(items){
    return {
        type: "SET_DATA",
        items
    }

}