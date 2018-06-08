import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteItemComponent } from './note-item.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, AppState } from '../store';
import { Note } from '../models';
import { actionTypes } from '../store/actions';
import { By } from '@angular/platform-browser';

let component: NoteItemComponent;
let fixture: ComponentFixture<NoteItemComponent>;
let store: Store<AppState>;
let dispatchSpy;

describe('NoteItemComponent', () => {
  
  describe('Unit', () => {

    beforeEach(async(() => setup()));
    
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    
    it('dispatch action on deleteNote', () => {
      const testNote: Note = { title: 'test title', text: 'test text' };
      
      component.deleteNote(testNote);
      
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      expect(dispatchSpy).toHaveBeenCalledWith(new actionTypes.DeleteNote(testNote));
    });
  });

  describe('Integrational', () => {
    beforeEach(async(() => setup()));

    it('delete note by click on X icon', () => {
      const testNote = {title: 'test title', text: 'test text'};
      component.note = testNote;

      const deleteBtn = fixture.debugElement.query(By.css('.deleteNote'));

      deleteBtn.triggerEventHandler('click', null);

      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      expect(dispatchSpy).toHaveBeenCalledWith(new actionTypes.DeleteNote(testNote));
    });
  });
});

function setup() {
  TestBed.configureTestingModule({
    declarations: [NoteItemComponent],
    imports: [StoreModule.forRoot(reducers)]
  }).compileComponents();

  store = TestBed.get(Store);
  dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

  fixture = TestBed.createComponent(NoteItemComponent);
  component = fixture.componentInstance;
  component.note = { title: 'title', text: 'text', color: '#ffffff' };

  fixture.detectChanges();
}
