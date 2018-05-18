import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import './NotesContainer.css';

import Note from './Note';

const masonryOptions = {
  itemSelector: '.noteItem',
  horizontalOrder: true,
  gutter: 10,
  fitWidth: true
};

export default class NotesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const childElements = this.props.notes.map(note => (
      <Note
        onDeleteNote={this.props.onDeleteNote.bind(null, note)}
        key={note.id}
        color={note.color}
        title={note.title}
        text={note.text}
      />
    ));

    return (
      <Masonry
        className={'notesContainer'} // default ''
        options={masonryOptions} // default {}
      >
        {childElements}
      </Masonry>
    );
  }
}
