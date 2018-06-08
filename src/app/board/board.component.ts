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

  ngOnInit() {
    this.store
      .select((appState: AppState) => appState.notes)
      .pipe(takeUntil(this.$destroyed))
      .subscribe(notes => (this.notes = notes.data));

    this.store.dispatch(new fromActions.LoadNotes());
  }

  dropped(e) {
    e.target.classList.remove('hover');
  }


  dragLeave(e) {
    e.target.classList.remove('hover');
  }

  ngOnDestroy() {
    this.$destroyed.next();
  }

  dragStart(event) {
    event.target.classList.add('dragging');
    event.dataTransfer.setData('text', event.target.id);
  }

  dragOver($event) {
    $event.preventDefault();
    $event.stopPropagation();

    console.log($event.dataTransfer.getData('text'))
    // $event.target.classList.add('hover');

    // const item = $event.target.closest('.item');
    // const cardsContainer = $event.target.closest('.column').querySelector('.cards');

    // const data = $event.dataTransfer.getData('text');
    // console.log($event)
    // $event.target.parentNode.insertBefore(document.getElementById(data), $event.target.parentNode);
    
  }


  drop($event) {
    $event.preventDefault();
    const data = $event.dataTransfer.getData('text');
    console.log(data)
    $event.target.classList.remove('hover');

    //find cards container to insert
    const cardsContainer = $event.target.closest('.column').querySelector('.cards');

    const target = $event.target;

    document.getElementById(data).classList.remove('dragging');

    if (target.parentNode.className === 'item') {
      const newOrder = target.parentNode.id;
      const oldOrder = document.getElementById(data).id;
      document.getElementById(data).setAttribute('order', newOrder);
      target.parentNode.setAttribute('order', oldOrder);

      target.parentNode.parentNode.insertBefore(document.getElementById(data), target.parentNode);
    } else if (target.className === 'cards') {
      if(target.children.length){
        target.insertBefore(document.getElementById(data), target.children[0]);
      }
    } else if (target.className === 'column') {
      cardsContainer.appendChild(document.getElementById(data));
    }
  }
}
