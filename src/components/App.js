import React from "react";
import Menubar from "./Menubar";
import Home from "./Home";
import About from "./About";
import Services from "./Service";
import Skills from "./skills";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Review from "./Review";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Card from "./Card_discription";
import "../Style.css"



function createContact(contact){
  return< About
    phone={contact.phone}
    email={contact.email}
    from={contact.from}
    language={contact.language}
    freelence={contact.freelence}

  />
}
function CreateCard(card_description){
  return <Services 
  title={card_description.title}
  description={card_description.description}
 />

}
function App() {
  return (
    <div className="App">
     <Menubar />
     <Home/>
     {Contact.map(createContact)}
     <div className="test">{Card.map(CreateCard)}</div>
     
     <Skills/>
     <Resume/>
    <Portfolio/>
    <Review/>
    <Blogs/>
    </div>
  );
}

export default App;
