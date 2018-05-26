import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.css']
})
export class NotesEditorComponent implements OnInit {
  hero = {
    id: 1,
    name: 'Windstorm'
  };
  color = '#ffffff';

  constructor() { }

  onColorChange(event) {
    this.color = event;
  }

  ngOnInit() {
  }

}
