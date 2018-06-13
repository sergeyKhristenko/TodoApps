import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Note } from '../models';
import { DragndropService, Toggle } from '../dragndrop.service';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardColumnComponent implements OnInit {
  @Input() notes: Note[] = [];

  constructor(private dndService: DragndropService) {}

  ngOnInit() {}

  addDroppedNote(note: Note) {
    this.notes = [...this.notes, note].sort((a, b) => a.order - b.order);
  }

  dragStart(event) {
    console.log(this, this.notes);
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
    const cardsFooter = container.querySelector('.cards__footer');

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

    const noteId = dragged.id;

    const draggedNote = source.notes.find(note => note._id === noteId);

    source.notes = source.notes.filter(note => note !== draggedNote);
    target.notes = [...target.notes, draggedNote].sort((a, b) => a.order - b.order);

    const cards = Array.prototype.slice.call(cardsContainer.children);
    target.notes.find(note => note._id === dragged.id).order = cards.indexOf(dragged);
  }
}
