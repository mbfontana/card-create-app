import React, { Component, useState } from "react";
import "./style.css";

class FormsRegistrer extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  handlerTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  handlerTextChange(event) {
    event.stopPropagation();
    this.text = event.target.value;
    console.log(event.target.value);
  }

  createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="form-register" onSubmit={this.createNote.bind(this)}>
        <input
          type="text"
          placeholder="Title"
          className="form-register_input"
          onChange={this.handlerTitleChange.bind(this)}
        ></input>
        <textarea
          placeholder="Write your note..."
          className="form-register_input form-register_text"
          onChange={this.handlerTextChange.bind(this)}
        ></textarea>
        <button className="form-register_input form-register_submit">
          Create note
        </button>
      </form>
    );
  }
}

export default FormsRegistrer;
