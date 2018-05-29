import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.notesUrl}/notes`);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.notesUrl}/notes`, note, this.httpOptions);
  }

  deleteNote(note) {
    return this.http.delete(`${this.notesUrl}/notes/${note._id}`);
  }
}
