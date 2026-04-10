import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Signup from '/src/components/SignUp'
import Login from '/src/components/SignIn.js'
import Home from '/src/components/Home'
import Menu from '/src/components/Menu'
import Wallet from '/src/components/Wallet'
import Send from '/src/components/send'
import Receive from '/src/components/receive'

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }


  render() {



 

    const [page, setPage] = useState("home");
    
      // conditional rendering
  
  if (page == "home") { return  (
      <div className="">

     <Home/>
        <Paragraph text={this.props.text} />
      </div> 
    );
    
  } else {
    return  (
      <div className="">

     <Wallet/>
        <Paragraph text={this.props.text} />
      </div> 
    );
  } 
    
   
    
    
    
    
  }
}







class Title extends React.Component {
  render() {
    return (<h1 className="">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="">
      {this.props.text}
      </p>
    )
  }
}
ReactDOM.render(
  <Main title="" text=""></Main>,
  document.getElementById('react-app')
);
