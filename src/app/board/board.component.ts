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

  dragLeave($event) {
    $event.stopPropagation();
    $event.preventDefault();
  }

  ngOnDestroy() {
    this.$destroyed.next();
  }

  dragStart(event) {
    event.target.classList.add('dragging');
    event.dataTransfer.setData('text', event.target.id);
    event.dropEffect = 'move';

    this.draggable.data = event.dataTransfer.getData('text');
    this.draggable.dragged = event.target;

    this.draggable.placeholder = document.querySelector('.item.placeholder');
    const width = +this.draggable.dragged.clientWidth;
    const height = +this.draggable.dragged.clientHeight;

    this.draggable.placeholder.setAttribute('style', `width: ${width}px; height: ${height}px`);
  }

  dragOver($event) {
    $event.stopPropagation();
    $event.preventDefault();
  }

  dragEnter($event) {
    const container = $event.target.closest('.cards');
    const currentItem = $event.target.closest('.item');

    if (!container.children.length) {
      this.draggable.dragged.style.display = "none";
      this.draggable.placeholder.style.display = "block";
      container.appendChild(this.draggable.placeholder);
    } else if(currentItem) {
      this.draggable.dragged.style.display = "none";      
      this.draggable.placeholder.style.display = "block";
      container.insertBefore(this.draggable.placeholder, currentItem);
    } 
  }

  drop($event) {
    $event.preventDefault();
    $event.stopPropagation();
    const data = $event.dataTransfer.getData('text');

    //find cards container to insert
    const cardsContainer = $event.target.closest('.cards');
    const dragged = document.getElementById(data);
    const placeholder = document.querySelector('.item.placeholder');

    const target = $event.target;

    dragged.classList.remove('dragging');

    const isSelf: boolean = target.closest('.item') === dragged;
    if (isSelf) {
      return;
    }

    this.draggable.dragged.style.display = "block";    
    this.draggable.placeholder.style.display = "none";

    cardsContainer.insertBefore(dragged, placeholder);
  }
}
