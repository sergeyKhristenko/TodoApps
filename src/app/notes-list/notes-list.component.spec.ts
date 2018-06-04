import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListComponent } from './notes-list.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, AppState } from '../store';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { MockComponent } from 'ng2-mock-component';

describe('NotesListComponent', () => {
  let component: NotesListComponent;
  let fixture: ComponentFixture<NotesListComponent>;
  let store: Store<AppState>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotesListComponent, MockComponent({ selector: 'app-note-item', inputs: ['note'] })],
      imports: [StoreModule.forRoot(reducers)]
    }).compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.stub();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
