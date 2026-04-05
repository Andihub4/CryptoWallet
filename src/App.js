import React from "react";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import Home from "./components/Home";
export default class App extends React.Component
{
  
  
  
  render() {
    return (
      <div>
        
        
        <Card 
        title="First Card"
        text="This is a new component 🚀"
      />
        
        
        
        <Title label="React" />
        <Paragraph text="Caution: do not look into laser with remaining eye." />
      </div>
    );
  }
}