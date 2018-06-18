import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { reducers, AppState } from '../store';
import { cardActions } from '../store/actions';
import { Card } from '../models';

import { NotesEditorComponent } from './notes-editor.component';
import { ColorPickerComponent } from '../color-picker/color-picker.component';

describe('Notes-Editor integration tests', () => {
  let fixture: ComponentFixture<NotesEditorComponent>;
  let component: NotesEditorComponent;
  let store: Store<AppState>;
  let storeSpy;
  let sendKeys;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesEditorComponent, ColorPickerComponent],
      imports: [StoreModule.forRoot(reducers), FormsModule, RouterTestingModule]
    });

    fixture = TestBed.createComponent(NotesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);
    storeSpy = spyOn(store, 'dispatch').and.stub();
    sendKeys = SendKeys.bind(fixture);
  });

  it('create note on click on ADD btn', () => {
    sendKeys('.titleInput', 'test title');
    sendKeys('.textInput', 'test text');

    const addBtn = fixture.debugElement.query(By.css('.addBtn'));
    addBtn.triggerEventHandler('click', null);

    expect(storeSpy).toHaveBeenCalled();
  });

  it('change color on click on colorBtn', () => {
    const expectedNote: Card = { title: 'test title', text: 'test text', color: '' };
    sendKeys('.titleInput', expectedNote.title);
    sendKeys('.textInput', expectedNote.text);

    const colorBtn = fixture.debugElement.queryAll(By.css('.color'))[1];
    colorBtn.triggerEventHandler('click', null);
    expectedNote.color = colorBtn.styles.backgroundColor;

    const addBtn = fixture.debugElement.query(By.css('.addBtn'));
    addBtn.triggerEventHandler('click', null);

    expect(storeSpy).toHaveBeenCalledTimes(1);
    expect(storeSpy).toHaveBeenCalledWith(new cardActions.CreateCard(expectedNote));
  });
});

function SendKeys(selector: string, value: string) {
  const titleInput = this.debugElement.query(By.css(selector)).nativeElement;
  titleInput.value = value;
  titleInput.dispatchEvent(new Event('input'));
}
