import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.css']
})
export class NotesEditorComponent implements OnInit {
  private DEFAULT_COLOR = '#ffffff';
  private color = this.DEFAULT_COLOR;
  private noteTitle = '';
  private noteText = '';

  @ViewChild(ColorPickerComponent) private colorPickerComponent: ColorPickerComponent;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.colorPickerComponent.selectedColor = this.DEFAULT_COLOR;
  }

  addNewTodo() {
    const note: Note = { title: this.noteTitle, text: this.noteText, color: this.color };

    this.color = this.DEFAULT_COLOR;
    this.colorPickerComponent.selectedColor = this.DEFAULT_COLOR;
    this.noteText = '';
    this.noteTitle = '';
  }

  onColorChange(color) {
    this.color = color;
  }
}
