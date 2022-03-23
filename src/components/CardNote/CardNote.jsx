import React, { Component } from "react";
import "./style.css"

class CardNote extends Component {
  render() {
    return (
      <section className="note-card">
        <header>
          <h4>Title</h4>
        </header>
        <p>Your card notes...</p>
      </section>
    );
  }
}

export default CardNote;
