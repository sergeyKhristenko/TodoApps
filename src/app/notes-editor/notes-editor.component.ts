import { Component, OnInit, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { Card } from '../models';
import { CardService } from '../card.service';
import { Store } from '@ngrx/store';
import * as fromActions from '../store/actions/card.action';

import { AppState } from '../store';

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.css']
})
export class NotesEditorComponent{
  DEFAULT_COLOR = '#ffffff';
  DEFAULT_TEXT = '';
  DEFAULT_TITLE = '';
  noteTitle = '';
  noteText = '';
  color = this.DEFAULT_COLOR;

  constructor(private store: Store<AppState>) {}

  addNewTodo() {
    if(!this.noteText || !this.noteTitle) {
      return
    }

    const note: Card = { title: this.noteTitle, text: this.noteText, color: this.color };
    this.store.dispatch(new fromActions.CreateCard(note));

    this.color = this.DEFAULT_COLOR;
    this.noteText = this.DEFAULT_TEXT;
    this.noteTitle = this.DEFAULT_TITLE;
  }

  onColorChange(color) {
    this.color = color;
  }
}
