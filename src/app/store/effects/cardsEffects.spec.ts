import { Actions } from '@ngrx/effects';
import { cold, hot } from 'jasmine-marbles';
import { of } from 'rxjs';
import { CardsEffects } from './cardsEffects';
import * as cardActions from '../actions/card.action';

describe('Cards Effects tests', () => {
  
  it('loadCards', () => {
    const cards = [{ title: 'title' }];

    const actions = new Actions(cold('-a-|', { a: { type: cardActions.LOAD_CARDS } }));
    const service = jasmine.createSpyObj('cardsService', ['getCards']);
    service.getCards.and.returnValue(of({ data: cards }));
    const effects = new CardsEffects(actions, service);

    const expectedObservable = hot('-a-|', { a: { type: cardActions.LOAD_CARDS_SUCCESS, payload: { data: cards } } });
    expect(effects.getCards).toBeObservable(expectedObservable);
  });

  it('Create Card', () => {
    const card = { title: 'title' };

    const actions = new Actions(cold('-a-|', { a: { type: cardActions.CREATE_CARD, payload: card } }));

    const service = jasmine.createSpyObj('cardsService', ['createCard']);
    service.createCard.and.returnValue(of({ data: card }));
    const effects = new CardsEffects(actions, service);

    const expectedObservable = hot('-a-|', { a: { type: cardActions.CREATE_CARD_SUCCESS, payload: { data: card } } });
    expect(effects.createCard).toBeObservable(expectedObservable);
  });

  it('Delete Card', () => {
    const card = { title: 'title' };

    const actions = new Actions(cold('-a-|', { a: { type: cardActions.DELETE_CARD, payload: card } }));
    const service = jasmine.createSpyObj('cardsService', ['deleteCard']);
    service.deleteCard.and.returnValue(of(true));
    const effects = new CardsEffects(actions, service);

    const expectedObservable = hot('-a-|', { a: { type: cardActions.DELETE_CARD_SUCCESS, payload: card } });
    expect(effects.deleteCard).toBeObservable(expectedObservable);
  });
});
