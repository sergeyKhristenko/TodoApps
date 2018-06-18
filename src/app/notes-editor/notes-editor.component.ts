import {
  Component,
  Input,
  AfterViewInit,
  OnInit,
  AfterContentChecked,
  AfterContentInit,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { Card } from '../models';
import { Store } from '@ngrx/store';
import * as fromActions from '../store/actions/card.action';

import { AppState } from '../store';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.css']
})
export class NotesEditorComponent implements AfterViewInit {
  @Input() card: Card;
  @Input() action: string;

  @Output() cardEdited = new EventEmitter<Card>();
  @Output() cardAdded = new EventEmitter<Card>();

  DEFAULT_COLOR = '#ffffff';
  DEFAULT_TEXT = '';
  DEFAULT_TITLE = '';
  noteTitle = '';
  noteText = '';
  color = this.DEFAULT_COLOR;
  columnId = '';

  constructor(private store: Store<AppState>, public ngxSmartModalService: NgxSmartModalService) {}

  ngAfterViewInit() {
    this.noteTitle = this.card ? this.card.title : this.DEFAULT_TITLE;
    this.color = this.card ? this.card.color : this.DEFAULT_COLOR;
    this.noteText = this.card ? this.card.text : this.DEFAULT_TEXT;
    this.columnId = this.card ? this.card.columnId : this.columnId;
  }

  addNewTodo() {
    const _card: Card = {
      title: this.noteTitle,
      text: this.noteText,
      color: this.color,
      columnId: this.card.columnId,
      _id: this.card._id
    };

    console.log(this.action)

    if (this.action === 'create') {
      this.cardAdded.emit(_card);
    }

    if(this.action === 'edit') {
      this.cardEdited.emit(_card);
    }

    // if (!this.noteText || !this.noteTitle) {
    //   return;
    // }

    // const _card: Card = { title: this.noteTitle, text: this.noteText, color: this.color, columnId: this.card.columnId };

    // this.store.dispatch(new fromActions.CreateCard(_card));

    // this.color = this.DEFAULT_COLOR;
    // this.noteText = this.DEFAULT_TEXT;
    // this.noteTitle = this.DEFAULT_TITLE;
  }

  onColorChange(color) {
    this.color = color;
  }
}
