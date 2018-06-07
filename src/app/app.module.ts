import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotesEditorComponent } from './notes-editor/notes-editor.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteItemComponent } from './note-item/note-item.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store';
import * as fromReducers from './store/reducers/notes.reducer';
import * as fromActions from './store/actions/notes.action';
import { NotesEffects } from './store/effects/notesEffects';
import { LoginComponent } from './login/login.component';
import { UserEffects } from './store/effects/userEffects';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: NotesEditorComponent,
    children: [
      {
        path: '',
        component: NotesListComponent
      }
    ], canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    NotesEditorComponent,
    ColorPickerComponent,
    NotesListComponent,
    NoteItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([NotesEffects, UserEffects]),
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
