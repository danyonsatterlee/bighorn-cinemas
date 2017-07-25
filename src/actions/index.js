import axios from "axios";



export function loadData(){
  
    return (dispatch)=>{
        return axios.get("http://bighorncinemas.net/api/v1/homepage").then((response)=>{
        dispatch(setData(response.data.currentAttractions));
          console.log(response.data)
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