import React, { Component } from "react";
import "./style.css"

class CardNote extends Component {
  render() {
    return (
      <section className="note-card">
        <header className="note-card_header">
          <h4 className="note-card_title">{this.props.title}</h4>
        </header>
        <p className="note-card_text">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNote;
