import React, { Component } from "react";
import CardNote from "./CardNote.jsx";

class NoteList extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Faculdade", "TCC").map((element) => {
          return (
            <li>
              <h2>{element}</h2>
              <CardNote />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
