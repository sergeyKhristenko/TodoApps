import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MockComponent} from 'ng-mocks';

import { NotesEditorComponent } from './notes-editor.component';
import { StoreModule, Store } from '@ngrx/store';

import {reducers, AppState} from '../store/reducers';

fdescribe('NotesEditorComponent', () => {
  let component: NotesEditorComponent;
  let fixture: ComponentFixture<NotesEditorComponent>;
  let store: Store<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesEditorComponent, MockComponent() ],
      imports: [StoreModule.forRoot(reducers)]
    })

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.stub();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
