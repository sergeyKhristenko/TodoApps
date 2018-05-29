import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note: Note;

  constructor(private noteServie: NoteService) {}

  ngOnInit() {}

  deleteNote(note) {
    this.noteServie.deleteNote(note).subscribe(data => console.log(data));
  }
}
