import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as fromStore from '../store';
import * as fromActions from '../store/actions/notes.action';
import { Note } from '../models';
import { AppState } from '../store';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[];
  private $destroyed: Subject<any> = new Subject();

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.store
      .select((appState: AppState) => appState.notes)
      .pipe(takeUntil(this.$destroyed))
      .subscribe(state => this.notes = state.data);

    this.store.dispatch(new fromActions.LoadNotes());
  }

  ngOnDestroy() {
    this.$destroyed.next();
  }
}
