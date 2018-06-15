import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Note } from './models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http: HttpClient) {}
  readonly apiURL = environment.apiURL;
  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer 5b168f2353e5f9707332fbc5' })
  };

  getNotes(): Observable<any> {
    return this.http.get<Note[]>(`${this.apiURL}/cards`);
  }

  createNote(note: Note): Observable<any> {
    return this.http.post<Note>(`${this.apiURL}/cards`, note, this.httpOptions);
  }

  deleteNote(note): Observable<any> {
    return this.http.delete(`${this.apiURL}/cards/${note._id}`);
  }
}
