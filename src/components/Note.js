import React, { Component } from 'react';
import './Note.css';

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div className="noteItem" style={{backgroundColor: this.props.color}}>
          <span className="deleteNote" onClick={this.props.onDeleteNote}>&#10006;</span>
          <span className="noteTitle">{this.props.title}</span>
          <div className="noteText">{this.props.text}</div>
        </div>
    );
  }
}
