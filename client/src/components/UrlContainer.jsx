import React, { Component } from "react";
import axios from 'axios';
import ExistingUrl from "./ExistingUrl";
import InputForm from "./InputForm";

export default class UrlInputForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      longUrl: '',
      shortUrl: '',
      message: ''
    }
  }

  onChangeUrl(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newUrl = {
      newUrl: this.state.longUrl
    }
    
    axios.post("v1/", newUrl)
      .then(response => {
        if (response.status === 201) {
          this.setState({ message: "Successfully saved into db" });
        } else {
          this.setState({ message: "Url already exists in db" });
        }
        this.setState({ shortUrl: response.data.shortUrl });
        this.setState({ longUrl: response.data.longUrl });
      });
  }

  render() {
    return (
      <div className="urlInputForm">
        <InputForm 
          onChangeUrl={this.onChangeUrl}
          handleSubmit={this.handleSubmit}
        />
        <ExistingUrl 
          message={this.state.message}
          shortUrl={this.state.shortUrl}
          longUrl={this.state.longUrl}
        />
      </div>
    );
  }
}