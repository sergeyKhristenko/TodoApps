import { Component, OnInit, ViewChild } from '@angular/core';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { Store } from '@ngrx/store';
import * as fromActions from '../store/actions/notes.action';

import { AppState } from '../store';

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.css']
})
export class NotesEditorComponent implements OnInit {
  DEFAULT_COLOR = '#ffffff';
  noteTitle = '';
  noteText = '';
  color = this.DEFAULT_COLOR;
  
  @ViewChild(ColorPickerComponent) private colorPickerComponent: ColorPickerComponent;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.colorPickerComponent.selectedColor = this.DEFAULT_COLOR;
  }

  addNewTodo() {
    if(!this.noteText || !this.noteTitle) {
      return
    }

    const note: Note = { title: this.noteTitle, text: this.noteText, color: this.color };
    this.store.dispatch(new fromActions.CreateNote(note));

    this.color = this.DEFAULT_COLOR;
    this.colorPickerComponent.selectedColor = this.DEFAULT_COLOR;
    this.noteText = '';
    this.noteTitle = '';
  }

  onColorChange(color) {
    this.color = color;
  }
}
