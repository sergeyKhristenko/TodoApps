import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardColumnComponent } from './board-column.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store';
import { Card, Column } from '../models';

describe('BoardColumnComponent', () => {
  let component: BoardColumnComponent;
  let fixture: ComponentFixture<BoardColumnComponent>;

  const columnMock = new Column();
  columnMock.title = 'title';
  columnMock._id = '1';
  columnMock.cards = [{ title: 'title', text: 'text', color: '#ffffff' }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardColumnComponent],
      imports: [StoreModule.forRoot(reducers)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardColumnComponent);
    component = fixture.componentInstance;

    component.column = columnMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
