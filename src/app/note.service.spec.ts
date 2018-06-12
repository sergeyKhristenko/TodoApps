import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NoteService } from './note.service';
import { HttpClient } from '@angular/common/http';
import { Note } from './models';

describe('NoteService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let noteService: NoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NoteService]
    });

    noteService = TestBed.get(NoteService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('getNotes', () => {
    const testNotes: Note[] = [{ title: 'Test Title', text: 'test text' }];

    noteService.getNotes().subscribe(data => expect(data).toEqual(testNotes));

    const req = httpTestingController.expectOne(`${noteService.apiURL}/notes`);
    
    expect(req.request.method).toEqual('GET');
    req.flush(testNotes);
  });

  it('createNote', () => {
    const testNote: Note = { title: 'Test Title 2', text: 'test text 2' };

    noteService.createNote(testNote).subscribe(data => {
      expect(data).toEqual(testNote);
    });

    const req = httpTestingController.expectOne(`${noteService.apiURL}/notes`);
    
    expect(req.request.method).toEqual('POST');
    req.flush(testNote);
  });

  it('deleteNote', () => {
    const testNote: Note = { _id: '22', title: 'Test Title 2', text: 'test text 2' };

    noteService.deleteNote(testNote).subscribe(data => {
      expect(data).toEqual(testNote);
    });

    const req = httpTestingController.expectOne(`${noteService.apiURL}/notes/${testNote._id}`);
    
    expect(req.request.method).toEqual('DELETE');
    req.flush(testNote);
  });
});
