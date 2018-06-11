import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models';
import { NoteService } from '../note.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { actionTypes } from '../store/actions';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent {
  @Input() note: Note;
  @Input() id: number;

  constructor(private store: Store<AppState>) {}

  deleteNote(note) {
    this.store.dispatch(new actionTypes.DeleteNote(note));
  }

  dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
  }
}
