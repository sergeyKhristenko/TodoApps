import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { actionTypes } from '../store/actions';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note: Note;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  deleteNote(note) {
    this.store.dispatch(new actionTypes.DeleteNote(note));
  }
}
