import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CardService } from './card.service';
import { HttpClient } from '@angular/common/http';
import { Card } from './models';

describe('CardService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let cardService: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardService]
    });

    cardService = TestBed.get(CardService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('getCards', () => {
    const testCards: Card[] = [{ title: 'Test Title', text: 'test text' }];

    cardService.getCards().subscribe(data => expect(data).toEqual(testCards));

    const req = httpTestingController.expectOne(`${cardService.apiURL}/cards`);
    
    expect(req.request.method).toEqual('GET');
    req.flush(testCards);
  });

  it('createCard', () => {
    const testCard: Card = { title: 'Test Title 2', text: 'test text 2' };

    cardService.createCard(testCard).subscribe(data => {
      expect(data).toEqual(testCard);
    });

    const req = httpTestingController.expectOne(`${cardService.apiURL}/cards`);
    
    expect(req.request.method).toEqual('POST');
    req.flush(testCard);
  });

  it('deleteCard', () => {
    const testCard: Card = { _id: '22', title: 'Test Title 2', text: 'test text 2' };

    cardService.deleteCard(testCard).subscribe(data => {
      expect(data).toEqual(testCard);
    });

    const req = httpTestingController.expectOne(`${cardService.apiURL}/cards/${testCard._id}`);
    
    expect(req.request.method).toEqual('DELETE');
    req.flush(testCard);
  });
});
