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
  readonly httpOptions = {
    // TODO this is mock tocken. Need to add real tokens
    headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${this.getToken()}` })
  };

  private getToken() {
    return localStorage.getItem('token');
  }

  getBoards(): Observable<any> {
    return this.http.get(`${this.apiURL}/boards`, this.httpOptions);
  }

  getBoard(board: Board): Observable<any> {
    return this.http.get(`${this.apiURL}/boards/${board._id}`);
  }

  createBoard(board: Board): Observable<any> {
    return this.http.post(`${this.apiURL}/boards`, board, this.httpOptions);
  }

  updateBoard(board: Board): Observable<any> {
    return this.http.put(`${this.apiURL}/boards/${board._id}`, board, this.httpOptions);
  }

  updateColumn(column: Column): Observable<any> {
    return this.http.put(`${this.apiURL}/columns/${column._id}`, column, this.httpOptions);
  }
}
