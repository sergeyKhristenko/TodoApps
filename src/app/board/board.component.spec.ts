import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { NoteItemComponent } from '../note-item/note-item.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent, NoteItemComponent ],
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
