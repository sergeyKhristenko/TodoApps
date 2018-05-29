import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotesEditorComponent } from './notes-editor/notes-editor.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteItemComponent } from './note-item/note-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesEditorComponent,
    ColorPickerComponent,
    NotesListComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
