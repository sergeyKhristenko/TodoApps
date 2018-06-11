import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { takeUntil } from 'rxjs/operators';

import * as fromStore from '../store';
import * as fromActions from '../store/actions/notes.action';
import { AppState } from '../store';
import { Note } from '../models';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {
  notes: Note[];
  private $destroyed: Subject<any> = new Subject();

  constructor(private store: Store<fromStore.AppState>) {}
  draggable = {
    data: null,
    placeholder: null,
    dragged: null
  };

  ngOnInit() {
    this.store
      .select((appState: AppState) => appState.notes)
      .pipe(takeUntil(this.$destroyed))
      .subscribe(notes => (this.notes = notes.data));

    this.store.dispatch(new fromActions.LoadNotes());
  }

  ngOnDestroy() {
    this.$destroyed.next();
  }

  dragStart(event) {
    this.draggable.dragged = event.target;
    this.draggable.placeholder = document.querySelector('.item.placeholder');
    this.draggable.placeholder.setAttribute(
      'style',
      `width: ${this.draggable.dragged.clientWidth}px; height: ${this.draggable.dragged.clientHeight}px`
    );
  }

  dragOver($event) {
    $event.stopPropagation();
    $event.preventDefault();
  }

  dragEnter($event) {
    const container = $event.target.closest('.cards');
    const currentItem = $event.target.closest('.item');
    const cardsFooter = container.querySelector('.cards__footer');
    
    this.draggable.dragged.style.display = 'none';
    this.draggable.placeholder.style.display = 'block';

    if (!container.querySelectorAll('[class="item"]').length || $event.target.className === 'cards__footer') {
      container.insertBefore(this.draggable.placeholder, cardsFooter);

      return;
    }

    if (currentItem) {
      const cards = Array.prototype.slice.call(container.children);

      // to move the card above or below selected
      if (cards.indexOf(this.draggable.placeholder) < cards.indexOf(currentItem)) {
        container.insertBefore(this.draggable.placeholder, container.children[cards.indexOf(currentItem) + 1]);
      } else {
        container.insertBefore(this.draggable.placeholder, currentItem);
      }
    }
  }

  dragEnd($event) {
    $event.preventDefault();
    $event.stopPropagation();

    this.draggable.dragged.style.display = 'block';
    this.draggable.placeholder.style.display = 'none';

    const cardsContainer = document.querySelector('.item.placeholder').closest('.cards');

    cardsContainer.insertBefore(this.draggable.dragged, document.querySelector('.item.placeholder'));
  }
}
