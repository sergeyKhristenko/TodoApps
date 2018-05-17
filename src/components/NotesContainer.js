import React, { Component } from 'react';
import './NotesContainer.css';

import Note from './Note';

export default class NotesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="notesContainer">
        {this.props.notes.map(note => <Note onDeleteNote={this.props.onDeleteNote.bind(null, note)} key={note.id} color={note.color} title={note.title} text={note.text}/>)}
      </div>
    );
  }
}
