import React, { Component, createContext } from "react";
import NoteList from "./components/NoteList";
import FormsRegistrer from "./components/FormsRegister";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor(){
    super();
    this.notes = [];
    this.state = {};
  }

  createNote(title, text) {
    this.notes.push({title, text});
    this.setState({
      notes:this.notes
    })
  }

  render() {
    return (
      <section className="main-content">
        <FormsRegistrer createNote={this.createNote.bind(this)} /> {/* new FormsRegister(createNote:{this.createNote.bind(this)})*/}
        <NoteList notes = {this.notes}/>
      </section>
    );
  }
}

export default App;
