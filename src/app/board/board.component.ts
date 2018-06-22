import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { takeUntil } from 'rxjs/operators';

import * as fromStore from '../store';
import * as fromActions from '../store/actions/board.action';
import { AppState } from '../store';
import { Card, Board, Column } from '../models';
import { Subject, Subscription } from 'rxjs';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit, OnDestroy {
  notes: Card[];
  columns: Column[];
  private $destroyed: Subject<any> = new Subject();

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.store
      .select((appState: AppState) => appState.board)
      .pipe(takeUntil(this.$destroyed))
      .subscribe(state => (this.columns = state.currentBoard.columns));

    // TODO replace board mock id
    this.store.dispatch(new fromActions.LoadBoard({ _id: '5b28f213edb0f3001027d30f' }));
  }

  ngOnDestroy() {
    this.$destroyed.next();
  }

}
