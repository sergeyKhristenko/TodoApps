import { Injectable } from '@angular/core';
import { BoardColumnComponent } from './board-column/board-column.component';

interface Draggable {
  placeholder?: HTMLElement;
  dragged?: HTMLElement;
  source?: BoardColumnComponent;
  target?: BoardColumnComponent;
}

@Injectable({
  providedIn: 'root'
})

export class DragndropService {
  draggable: Draggable = {
    placeholder: null,
    dragged: null,
    source: null,
    target: null
  };

  constructor() {}

  setSource(sourceObj: Draggable) {
    this.draggable = { ...this.draggable, ...sourceObj };
  }

  getSource() {
    return this.draggable;
  }

  setPlaceholder(placeholder: any) {
    this.draggable.placeholder = placeholder;
  }

  getDragged() {
    return this.draggable.dragged;
  }

  getPlaceholder() {
    return this.draggable.placeholder;
  }

  toggleDragged(type: Toggle) {
    this.draggable.dragged.style.display = type;
  }

  togglePlaceholder(type: Toggle) {
    this.draggable.placeholder.style.display = type;
  }
}

export enum Toggle {
  show = 'block',
  hide = 'none'
}
