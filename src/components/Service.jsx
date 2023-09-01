import React from "react";



function Services(props){
    return(
        <div>
            <div className="services">

        <p>{props.title}</p> 
        <p>{props.description}</p>   
        
        </div></div>
    
    );
}
export default Services;