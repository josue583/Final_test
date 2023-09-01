import React from "react";



function Home(){
    return(
        <div className="Home">
            <div className="greating">
                 
                <h1><span id="hello">Hello,I'm </span><span id="name"></span></h1> 
                <h3>N.Josue</h3>
                <p> Software Developer</p>
                <button id="hire_me">Hire Me</button>
            </div>
            <img id="joshua" src="./images/jo.jpg" alt=""/>
            
        </div>
    );
}

export default Home;