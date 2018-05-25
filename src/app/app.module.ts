import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotesEditorComponent } from './notes-editor/notes-editor.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesEditorComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
