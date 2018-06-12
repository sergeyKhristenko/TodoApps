import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { User, Note } from './models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  readonly apiURL = environment.apiURL;
  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(credentials): Observable<any> {
    return this.http.post<User>(`${this.apiURL}/login`, credentials, this.httpOptions);
  }
}
