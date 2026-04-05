import React from 'react';
import ReactDOM from 'react-dom';
import Home from '/src/components/Home'
import Menu from '/src/components/Menu'




class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }


  render() {

    
    return  (
      <div className="">
        <Home 
        title="First Card"
        text="This is a new component 🚀"
      />
      
      
      

      
      
      
          <Paragraph text={this.props.text} />
      </div>
    )
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
