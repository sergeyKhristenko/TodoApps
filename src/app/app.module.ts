import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotesEditorComponent } from './notes-editor/notes-editor.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { NoteItemComponent } from './note-item/note-item.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store';
import { CardsEffects } from './store/effects/cardsEffects';
import { LoginComponent } from './login/login.component';
import { UserEffects } from './store/effects/userEffects';
import { AuthGuard } from './guards/auth.guard';
import { BoardComponent } from './board/board.component';
import { BoardColumnComponent } from './board-column/board-column.component';
import { DragndropService } from './dragndrop.service';
import { BoardsEffects } from './store/effects/boardEffects';
import { NgxSmartModalModule } from 'ngx-smart-modal';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'board', component: BoardComponent, canActivate: [AuthGuard] },
  {
    path: 'notes',
    component: NotesEditorComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'board' }
];

@NgModule({
  declarations: [
    AppComponent,
    NotesEditorComponent,
    ColorPickerComponent,
    NoteItemComponent,
    LoginComponent,
    BoardComponent,
    BoardColumnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CardsEffects, UserEffects, BoardsEffects]),
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    NgxSmartModalModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
