import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { takeUntil } from 'rxjs/operators';

import * as fromStore from '../store';
import * as fromActions from '../store/actions/notes.action';
import { AppState } from '../store';
import { Note } from '../models';
import { Subject, Subscription } from 'rxjs';
import { DragndropService } from '../dragndrop.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit, OnDestroy {
  notes: Note[];
  private $destroyed: Subject<any> = new Subject();

  constructor(private store: Store<fromStore.AppState>, private dndService: DragndropService) {}

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

  // dragStart(event) {
  //   this.dndService.drag = event.target;
  //   // create placeholder for dragged object
  //   this.dndService.placeholder = document.querySelector('.item.placeholder');
  //   this.dndService.placeholder.setAttribute(
  //     'style',
  //     `width: ${this.dndService.dragged.clientWidth}px; height: ${this.dndService.dragged.clientHeight}px`
  //   );
  // }

  // dragOver($event) {
  //   $event.stopPropagation();
  //   $event.preventDefault();
  // }

  // dragEnter($event) {
  //   const container = $event.target.closest('.cards');
  //   const currentItem = $event.target.closest('.item');
  //   const cardsFooter = container.querySelector('.cards__footer');

  //   this.dndService.dragged.style.display = 'none';
  //   this.dndService.placeholder.style.display = 'block';

  //   if (!container.querySelectorAll('[class="item"]:not([style*="display: none"])').length) {
  //     container.appendChild(this.dndService.placeholder);

  //     return;
  //   }

  //   if (currentItem) {
  //     const cards = Array.prototype.slice.call(container.children);

  //     // to move the card above or below selected
  //     if (cards.indexOf(this.dndService.placeholder) < cards.indexOf(currentItem)) {
  //       container.insertBefore(this.dndService.placeholder, container.children[cards.indexOf(currentItem) + 1]);
  //     } else {
  //       container.insertBefore(this.dndService.placeholder, currentItem);
  //     }
  //   }
  // }

  // dragEnd($event) {    
  //   $event.preventDefault();
  //   $event.stopPropagation();
    
  //   this.dndService.dragged.style.display = 'block';
  //   this.dndService.placeholder.style.display = 'none';
    
  //   const cardsContainer = document.querySelector('.item.placeholder').closest('.cards');
  //   cardsContainer.insertBefore(this.dndService.dragged, document.querySelector('.item.placeholder'));
    
  //   const cards = Array.prototype.slice.call(cardsContainer.children);
  //   this.notes.find(note => note._id === this.dndService.dragged.id).order = cards.indexOf(this.dndService.dragged);
  // }

  // dragStart(event) {
  //   this.draggable.dragged = event.target;
  //   // create placeholder for dragged object
  //   this.draggable.placeholder = document.querySelector('.item.placeholder');
  //   this.draggable.placeholder.setAttribute(
  //     'style',
  //     `width: ${this.draggable.dragged.clientWidth}px; height: ${this.draggable.dragged.clientHeight}px`
  //   );
  // }

  // dragOver($event) {
  //   $event.stopPropagation();
  //   $event.preventDefault();
  // }

  // dragEnter($event) {
  //   const container = $event.target.closest('.cards');
  //   const currentItem = $event.target.closest('.item');
  //   const cardsFooter = container.querySelector('.cards__footer');

  //   this.draggable.dragged.style.display = 'none';
  //   this.draggable.placeholder.style.display = 'block';

  //   if (!container.querySelectorAll('[class="item"]:not([style*="display: none"])').length) {
  //     container.appendChild(this.draggable.placeholder);

  //     return;
  //   }

  //   if (currentItem) {
  //     const cards = Array.prototype.slice.call(container.children);

  //     // to move the card above or below selected
  //     if (cards.indexOf(this.draggable.placeholder) < cards.indexOf(currentItem)) {
  //       container.insertBefore(this.draggable.placeholder, container.children[cards.indexOf(currentItem) + 1]);
  //     } else {
  //       container.insertBefore(this.draggable.placeholder, currentItem);
  //     }
  //   }
  // }

  // dragEnd($event) {    
  //   $event.preventDefault();
  //   $event.stopPropagation();
    
  //   this.draggable.dragged.style.display = 'block';
  //   this.draggable.placeholder.style.display = 'none';
    
  //   const cardsContainer = document.querySelector('.item.placeholder').closest('.cards');
  //   cardsContainer.insertBefore(this.draggable.dragged, document.querySelector('.item.placeholder'));
    
  //   const cards = Array.prototype.slice.call(cardsContainer.children);
  //   this.notes.find(note => note._id === this.draggable.dragged.id).order = cards.indexOf(this.draggable.dragged);
  // }
}
