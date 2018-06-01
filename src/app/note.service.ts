import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http: HttpClient) {}
  private notesUrl = 'https://upbeat-medley-204814.appspot.com';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  notes = new BehaviorSubject<Note[]>([]);

  getNotes(): Observable<any> {
    return this.http.get<Note[]>(`${this.notesUrl}/notes`)
    .pipe(
      tap(notes => this.notes.next(notes))
    );
  }

  createNote(note: Note) {
    let _notes = this.notes.getValue();

    return this.http.post<Note>(`${this.notesUrl}/notes`, note, this.httpOptions)
    .pipe(
      tap(note => _notes.push(note) && this.notes.next(_notes)),
      catchError(() => {
        throw `Error creating note: ${JSON.stringify(note)}`;
      })
    );
  }

  deleteNote(note) {
    const _notes = this.notes.getValue();

    return this.http.delete(`${this.notesUrl}/notes/${note._id}`)
    .pipe(
      tap(() => this.notes.next(_notes.filter(_note => _note !== note))),
      catchError(() => {
        throw `Error deleting note: ${JSON.stringify(note)}`;
      })
    );
  }
}
