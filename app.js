import React from "react";
import ReactDOM from "react-dom";
import Signup from "/src/components/SignUp";
import Login from "/src/components/SignIn";
import Home from "/src/components/Home";
import Menu from "/src/components/Menu";
import Wallet from "/src/components/Wallet";
import Send from "/src/components/Send";
import Receive from "/src/components/Receive";

class Main extends React.Component {
  constructor(props) {
    super(props);
    // Set default page
    this.state = {
      page: "home",
    };
  }

  // Navigation function
  navigate = (pageName) => {
    this.setState({ page: pageName });
  };

  // Function to render pages based on state
  renderPage() {
    switch (this.state.page) {
      case "login":
        return <Login navigate={this.navigate} />;
      case "signup":
        return <Signup navigate={this.navigate} />;
      case "wallet":
        return <Wallet navigate={this.navigate} />;
      case "send":
        return <Send navigate={this.navigate} />;
      case "receive":
        return <Receive navigate={this.navigate} />;
      case "home":
      default:
        return <Home navigate={this.navigate} />;
    }
  }



  render() {
    return (
      <div   className="">
        {/* Optional Navigation Menu */}


        {/* Render Selected Page */}
        {this.renderPage()}

        {/* Additional Content */}
        <Paragraph text={this.props.text} />
      </div>
    );
  }
}





class Title extends React.Component {
  render() {
    return <h1 className="">{this.props.label}</h1>;
  }
}

class Paragraph extends React.Component {
  render() {
    return <p className="">{this.props.text}</p>;
  }
}

// Render the Main component
ReactDOM.render(
  <Main title="CryptoWallet" text="Welcome to the CryptoWallet application." />,
  document.getElementById("react-app")
);