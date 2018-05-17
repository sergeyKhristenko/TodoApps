import React, { Component } from 'react';
import './NotesEditor.css';

import ColorPicker from './ColorPicker';
import * as api from '../api/index.js';

export default class NotesEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
      color: '#FFFFFF'
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleColorChange(color) {
    this.setState({ color: color });
  }

  async addNewTodo() {
    const note = {
      title: this.state.title,
      text: this.state.text,
      color: this.state.color
    };

    const newNote = await api.createNote(note);

    this.props.handleAddTodo(newNote);
    this.setState({ title: '', text: '', color: '#ffffff' });
  }

  render() {
    return (
      <div className="NotesEditor">
        <input
          className="noteTitleInput"
          type="text"
          onChange={this.handleTitleChange}
          value={this.state.title}
          id="noteTitleInput"
          placeholder="Add title"
        />
        <textarea
          className="noteTextInput"
          rows="8"
          placeholder="Add text"
          onChange={this.handleTextChange}
          value={this.state.text}
        />

        <div className="NotesEditor__footer">
          <ColorPicker onColorChange={this.handleColorChange}/>
          <button className="addNoteBtn" onClick={this.addNewTodo}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
