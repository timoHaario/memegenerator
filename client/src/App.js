import React, { Component } from "react";
import Routes from './Routes'
import Header from './components/Header'

import "./App.css";

class App extends Component<Props>  {
  /*state = {
    response: ""
  };*/

  componentDidMount() {
    /*this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));*/
  }

  /*callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }*/

  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App
