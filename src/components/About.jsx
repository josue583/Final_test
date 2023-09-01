import React from "react";




function About(props){
    return(
        <div className="about_me">
            <h1 id="about">ABOUT Me</h1>
            <div className="about_content">
                <img src="./images/jos.png" alt="" />
                <div id="paragraph">
                   <h2>Hello! i'm Ndikumwenayo Josue</h2> 
                    <h3> Software Developer</h3>  
                        <p> I am a passionate and innovative software developer with a deep love
                        for crafting elegant and efficient solutions to complex problems.
                    </p>
                    <ul>
                        <li>phone: {props.phone}</li>
                        <li>Email: {props.email}</li>
                        <li>From: {props.from}</li>
                        <li>Language: {props.language}</li>
                        <li>Freelence: {props.freelence}</li>
                    </ul>
                    <button>Downloard CV</button>
                </div>
            </div>
        </div>
    );
}
export default About;