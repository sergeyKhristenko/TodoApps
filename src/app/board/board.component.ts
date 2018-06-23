import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { takeUntil, first } from 'rxjs/operators';

import * as fromStore from '../store';
import * as fromActions from '../store/actions/board.action';
import { AppState } from '../store';
import { Card, Board, Column, User } from '../models';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit, OnDestroy {
  notes: Card[];
  columns: Column[];
  userEmail: string = localStorage.getItem('email') || '';

  private $destroyed: Subject<any> = new Subject();

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.store
      .select((appState: AppState) => appState.board)
      .pipe(takeUntil(this.$destroyed))
      .subscribe(state => {
        this.columns = state.currentBoard.columns;
      });

    this.store
      .select((appState: AppState) => appState.board.allBoards)
      .pipe(first(allBoards => !!allBoards[0]))
      .subscribe(allBoards => {
        this.store.dispatch(new fromActions.LoadBoard({ _id: allBoards[0]._id }));
      });

    // TODO assuming each user has only one board
    this.store.dispatch(new fromActions.LoadBoards());
  }

  ngOnDestroy() {
    this.$destroyed.next();
  }
}
