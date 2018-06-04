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
  readonly apiURL = 'https://upbeat-medley-204814.appspot.com';
  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getNotes(): Observable<any> {
    return this.http.get<Note[]>(`${this.apiURL}/notes`);
  }

  createNote(note: Note): Observable<any> {
    return this.http.post<Note>(`${this.apiURL}/notes`, note, this.httpOptions);
  }

  deleteNote(note): Observable<any> {
    return this.http.delete(`${this.apiURL}/notes/${note._id}`);
  }
}
