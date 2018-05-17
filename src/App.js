import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './api/index';

import NotesEditor from './components/NotesEditor.js';
import NotesContainer from './components/NotesContainer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.notes = [];

    this.state = {
      notes: []
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }

  async componentWillMount() {
    this.notes = await api.getNotes();

    this.setState({ notes: this.notes });
  }

  handleAddTodo(newNote) {
    let { notes } = this.state;
    notes.push(newNote);

    this.setState({ notes });
  }

  async handleDeleteNote(noteToDelete) {
    let { notes } = this.state;
    const index = notes.findIndex(note => note.id === noteToDelete.id);

    notes.splice(index, 1);
    await api.deleteNote(noteToDelete.id);

    this.setState({ notes });
  }

  render() {
    return (
      <div>
        <h2 className="appTitle">NotesApp</h2>
        <NotesEditor handleAddTodo={this.handleAddTodo} />
        <NotesContainer notes={this.notes} onDeleteNote={this.handleDeleteNote} />
      </div>
    );
  }
}

export default App;
