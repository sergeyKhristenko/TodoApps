import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Column, Board } from './models';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor(private http: HttpClient) {}
  readonly apiURL = environment.apiURL;
  private headers = () => {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };
  };

  getBoards(): Observable<any> {
    return this.http.get(`${this.apiURL}/boards`, { headers: this.headers() });
  }

  getBoard(board: Board): Observable<any> {
    return this.http.get(`${this.apiURL}/boards/${board._id}`);
  }

  createBoard(board: Board): Observable<any> {
    return this.http.post(`${this.apiURL}/boards`, board, { headers: this.headers() });
  }

  updateBoard(board: Board): Observable<any> {
    return this.http.put(`${this.apiURL}/boards/${board._id}`, board, { headers: this.headers() });
  }

  updateColumn(column: Column): Observable<any> {
    return this.http.put(`${this.apiURL}/columns/${column._id}`, column, { headers: this.headers() });
  }
}
