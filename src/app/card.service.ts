import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Card } from './models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) {}
  readonly apiURL = environment.apiURL;
  private headers = () => {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };
  };

  getCards(): Observable<any> {
    return this.http.get<Card[]>(`${this.apiURL}/cards`);
  }

  createCard(card: Card): Observable<any> {
    return this.http.post<Card>(`${this.apiURL}/cards`, card, { headers: this.headers() });
  }

  deleteCard(note): Observable<any> {
    return this.http.delete(`${this.apiURL}/cards/${note._id}`);
  }

  updateCard(card: Card): Observable<any> {
    return this.http.put(`${this.apiURL}/cards/${card._id}`, card, { headers: this.headers() });
  }
}
