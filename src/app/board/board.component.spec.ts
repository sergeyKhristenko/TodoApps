import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { NoteItemComponent } from '../note-item/note-item.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store';
import { MockComponent } from 'ng2-mock-component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent, NoteItemComponent, MockComponent({selector: 'app-board-column', inputs: ['column']}) ],
      imports: [StoreModule.forRoot(reducers)]
    });

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
