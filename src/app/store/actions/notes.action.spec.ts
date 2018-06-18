import { cardActions } from '.';
import { Card } from '../../models';

describe('Cards actions tests', () => {
  it('LoadCards', () => {
    const action = new cardActions.LoadCards();

    expect({ ...action }).toEqual({ type: cardActions.LOAD_CARDS });
  });

  it('LoadCardsFail', () => {
    const payload = true;
    const action = new cardActions.LoadCardsFail(payload);

    expect({ ...action }).toEqual({ type: cardActions.LOAD_CARDS_FAIL, payload });
  });

  it('LoadCardsSuccess', () => {
    const payload = 'true' as Card;
    const action = new cardActions.LoadCardsSuccess([payload]);

    expect({ ...action }).toEqual({ type: cardActions.LOAD_CARDS_SUCCESS, payload: [payload] });
  });

  it('CreateCard', () => {
    const payload = true;
    const action = new cardActions.CreateCard(payload);

    expect({ ...action }).toEqual({ type: cardActions.CREATE_CARD, payload });
  });

  it('CreateCardFail', () => {
    const payload = true;
    const action = new cardActions.CreateCardFail(payload);

    expect({ ...action }).toEqual({ type: cardActions.CREATE_CARD_FAIL, payload });
  });

  it('CreateCardSuccess', () => {
    const payload = true as Card;
    const action = new cardActions.CreateCardSuccess(payload);

    expect({ ...action }).toEqual({ type: cardActions.CREATE_CARD_SUCCESS, payload });
  });

  it('DeleteCard', () => {
    const payload = true;
    const action = new cardActions.DeleteCard(payload);

    expect({ ...action }).toEqual({ type: cardActions.DELETE_CARD, payload });
  });

  it('DeleteCardFail', () => {
    const payload = true;
    const action = new cardActions.DeleteCardFail(payload);

    expect({ ...action }).toEqual({ type: cardActions.DELETE_CARD_FAIL, payload });
  });

  it('DeleteCardSuccess', () => {
    const payload = true;
    const action = new cardActions.DeleteCardSuccess(payload);

    expect({ ...action }).toEqual({ type: cardActions.DELETE_CARD_SUCCESS, payload });
  });
});
