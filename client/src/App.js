import React, { Component } from "react";
import Header from "./components/Header";
import UrlContainer from "./components/UrlContainer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <UrlContainer />
      </div>
    );
  }
}