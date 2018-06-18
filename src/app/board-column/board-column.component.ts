import { Component, OnInit, Input, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Card, Column } from '../models';
import { DragndropService, Toggle } from '../dragndrop.service';
import { BoardState } from '../store/reducers/board.reducer';
import { Store } from '@ngrx/store';
import { boardActions, cardActions } from '../store/actions';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardColumnComponent implements OnInit {
  @Input() column: Column;

  constructor(private dndService: DragndropService, private store: Store<BoardState>) {}

  ngOnInit() {}

  addDroppedNote(note: Card) {
    this.column.cards = [...this.column.cards, note];
  }

  dragStart(event) {
    console.log(this, this.column.cards);    
    this.dndService.setSource({ dragged: event.target, source: this });

    const placeholder = document.querySelector('.item.placeholder');
    placeholder.setAttribute('style', `width: ${event.target.clientWidth}px; height: ${event.target.clientHeight}px`);

    this.dndService.setPlaceholder(placeholder);
  }

  dragOver($event) {
    $event.stopPropagation();
    $event.preventDefault();
  }

  dragEnter($event) {
    const container = $event.target.closest('.cards');
    const currentItem = $event.target.closest('.item');

    this.dndService.setSource({ target: this });

    this.dndService.toggleDragged(Toggle.hide);
    this.dndService.togglePlaceholder(Toggle.show);

    if (!container.querySelectorAll('[class="item"]:not([style*="display: none"])').length) {
      container.appendChild(this.dndService.getPlaceholder());

      return;
    }

    if (currentItem) {
      const placeholder = this.dndService.getPlaceholder();
      const cards = Array.prototype.slice.call(container.children);

      if (cards.indexOf(placeholder) < cards.indexOf(currentItem)) {
        container.insertBefore(placeholder, container.children[cards.indexOf(currentItem) + 1]);
      } else {
        container.insertBefore(placeholder, currentItem);
      }
    }
  }

  dragEnd($event) {
    $event.preventDefault();
    $event.stopPropagation();

    const source = this.dndService.getSource().source;
    const target = this.dndService.getSource().target;
    const dragged = this.dndService.getDragged();

    this.dndService.toggleDragged(Toggle.show);
    this.dndService.togglePlaceholder(Toggle.hide);

    const cardsContainer = document.querySelector('.item.placeholder').closest('.cards');
    cardsContainer.insertBefore(dragged, document.querySelector('.item.placeholder'));

    const draggedNote = source.column.cards.find(note => note._id === dragged.id);

    source.column.cards = source.column.cards.filter(note => note !== draggedNote);
    target.column.cards = [...target.column.cards, draggedNote];

    target.column.cards.find(note => note._id === dragged.id).order = [...cardsContainer.children as any].indexOf(dragged);

    this.store.dispatch(new cardActions.UpdateCard(draggedNote));
  }
}
