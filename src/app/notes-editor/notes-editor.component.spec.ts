import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';
import { NgModule, Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { actionTypes } from '../store/actions';

import { NotesEditorComponent } from './notes-editor.component';
import { StoreModule, Store } from '@ngrx/store';

import { reducers, AppState } from '../store/reducers';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { Note } from '../note';

describe('NotesEditorComponent', () => {
  let component: NotesEditorComponent;
  let fixture: ComponentFixture<NotesEditorComponent>;
  let store: Store<AppState>;
  let dispatchSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotesEditorComponent,
        MockComponent({ selector: 'app-color-picker', inputs: ['selectedColor'], outputs: ['colorChange'] })
      ],
      imports: [StoreModule.forRoot(reducers), FormsModule]
    });

    fixture = TestBed.createComponent(NotesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);

    dispatchSpy = spyOn(store, 'dispatch').and.stub();
  });

  it('dispatch createNote action on create new todo', () => {
    const testNote: Note = { title: 'text', text: 'title', color: '#ffffff' };
    component.noteText = testNote.text;
    component.noteTitle = testNote.title;
    component.color = testNote.color;

    component.addNewTodo();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(new actionTypes.CreateNote(testNote));
  });

  it('not create new todo with empty title', () => {
    component.noteText = 'filled';
    component.noteTitle = '';

    component.addNewTodo();

    expect(dispatchSpy).not.toHaveBeenCalled();
  });

  it('not create new todo with empty text', () => {
    component.noteText = '';
    component.noteTitle = 'filled';

    component.addNewTodo();

    expect(dispatchSpy).not.toHaveBeenCalled();
  });

  it('restore default settings after creating new todo', () => {
    const testNote: Note = { title: 'text', text: 'title', color: '#ffffff' };
    component.noteText = testNote.text;
    component.noteTitle = testNote.title;
    component.color = testNote.color;

    component.addNewTodo();

    fixture.detectChanges();

    expect(component.noteText).toEqual(component.DEFAULT_TEXT);
    expect(component.noteTitle).toEqual(component.DEFAULT_TITLE);
    expect(component.color).toEqual(component.DEFAULT_COLOR);
  });

  it('colorChange changes the color', () => {
    const initialColor = component.color;
    const newColor = '#000000';
    component.onColorChange(newColor);

    expect(component.color).not.toEqual(initialColor);
    expect(component.color).toEqual(newColor);
  });
});
