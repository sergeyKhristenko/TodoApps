import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models';
import { CardService } from '../card.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { cardActions } from '../store/actions';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent {
  @Input() note: Card;
  @Input() id: number;

  constructor(private store: Store<AppState>) {}

  deleteNote(note) {
    this.store.dispatch(new cardActions.DeleteCard(note));
  }

  dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
  }
}
