import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Card, Column } from '../models';
import { DragndropService, Toggle } from '../dragndrop.service';
import { BoardState } from '../store/reducers/board.reducer';
import { Store } from '@ngrx/store';
import { boardActions } from '../store/actions';
import { AppState } from '../store';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardColumnComponent implements OnInit {
  @Input() column: Column;
  action = {
    create: 'create',
    edit: 'edit'
  };

  constructor(
    private dndService: DragndropService,
    private store: Store<AppState>,
    public ngxSmartModalService: NgxSmartModalService
  ) {}

  ngOnInit() {}

  onEditEvent(card) {
    this.ngxSmartModalService.getModal('editModal').close();
    this.ngxSmartModalService.resetModalData('editModal');
    this.store.dispatch(new boardActions.UpdateCard(card));
  }

  onAddEvent(card) {
    this.ngxSmartModalService.getModal('addModal').close();
    this.ngxSmartModalService.resetModalData('addModal');
    this.store.dispatch(new boardActions.CreateCard(card));
  }

  addCard() {
    const emptyCard = {
      columnId: this.column._id
    };

    this.ngxSmartModalService.setModalData(emptyCard, 'addModal');
    this.ngxSmartModalService.getModal('addModal').open();
  }

  editCard(card) {
    this.ngxSmartModalService.setModalData(card, 'editModal');
    this.ngxSmartModalService.getModal('editModal').open();
  }

  deleteCard(card) {
    // TODO
    this.store.dispatch(new boardActions.DeleteCard(card));
    this.column.cards = this.column.cards.filter(_card => _card._id !== card._id);
  }

  dragStart(event) {
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

    const draggedNote = source.column.cards.find(note => note._id === dragged.id);
    const draggedNoteIdx = source.column.cards.findIndex(card => card._id === draggedNote._id);

    if (target === source) {
      const cardsContainer = document.querySelector('.item.placeholder').closest('.cards');
      cardsContainer.insertBefore(dragged, document.querySelector('.item.placeholder'));

      const newIdx = [...(cardsContainer.children as any)].findIndex(el => el === dragged);
      source.column.cards = source.column.cards.filter(note => note !== draggedNote);
      target.column.cards.splice(newIdx, 0, draggedNote);
    } else {
      source.column.cards = source.column.cards.filter(note => note !== draggedNote);
      target.column.cards.splice(draggedNoteIdx, 0, draggedNote);
    }

    draggedNote.order = target.column.cards.findIndex(card => card._id === dragged.id);
    draggedNote.columnId = target.column._id;

    this.store.dispatch(new boardActions.UpdateCard(draggedNote));
  }
}
