import { TestBed, inject } from '@angular/core/testing';

import { BoardService } from './board.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Board } from './models';

describe('BoardService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let boardService: BoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BoardService]
    });

    boardService = TestBed.get(BoardService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('getBoards', () => {
    const testBoards: Board[] = [{ title: 'Test Title' }];

    boardService.getBoards().subscribe(data => expect(data).toEqual(testBoards));

    const req = httpTestingController.expectOne(`${boardService.apiURL}/boards`);
    
    expect(req.request.method).toEqual('GET');
    req.flush(testBoards);
  });

});
