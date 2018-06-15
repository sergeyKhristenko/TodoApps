import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor(private http: HttpClient) {}
  readonly apiURL = environment.apiURL;
  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer 5b168f2353e5f9707332fbc5' })
  };

  getBoards(): Observable<any> {
    return this.http.get(`${this.apiURL}/boards`, this.httpOptions);
  }

  getBoard(board): Observable<any> {
    return this.http.get(`${this.apiURL}/boards/${board._id}`);
  }

  createBoard(board): Observable<any> {
    return this.http.post(`${this.apiURL}/boards`, board, this.httpOptions);
  }

  updateBoard(board): Observable<any> {
    return this.http.put(`${this.apiURL}/boards/${board._id}`, board, this.httpOptions);
  }
}
