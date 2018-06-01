import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../store';
import * as fromActions from '../store/actions/notes.action';
import { Note } from '../note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[];

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => this.notes = state.notes.data);

    this.store.dispatch(new fromActions.LoadNotes());
  }
}
