import { Card } from '../../models';
import { boardActions } from '.';

describe('Cards actions tests', () => {

  it('CreateCard', () => {
    const payload = true;
    const action = new boardActions.CreateCard(payload);

    expect({ ...action }).toEqual({ type: boardActions.CREATE_CARD, payload });
  });

  it('CreateCardFail', () => {
    const payload = true;
    const action = new boardActions.CreateCardFail(payload);

    expect({ ...action }).toEqual({ type: boardActions.CREATE_CARD_FAIL, payload });
  });

  it('CreateCardSuccess', () => {
    const payload = true as Card;
    const action = new boardActions.CreateCardSuccess(payload);

    expect({ ...action }).toEqual({ type: boardActions.CREATE_CARD_SUCCESS, payload });
  });

  it('DeleteCard', () => {
    const payload = true;
    const action = new boardActions.DeleteCard(payload);

    expect({ ...action }).toEqual({ type: boardActions.DELETE_CARD, payload });
  });

  it('DeleteCardFail', () => {
    const payload = true;
    const action = new boardActions.DeleteCardFail(payload);

    expect({ ...action }).toEqual({ type: boardActions.DELETE_CARD_FAIL, payload });
  });

  it('DeleteCardSuccess', () => {
    const payload = true;
    const action = new boardActions.DeleteCardSuccess(payload);

    expect({ ...action }).toEqual({ type: boardActions.DELETE_CARD_SUCCESS, payload });
  });
});
