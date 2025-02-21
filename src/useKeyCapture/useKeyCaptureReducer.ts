import { KeyActionTypes } from './useKeyCaptureUtils';
import type { KeyData, Action } from './types';

const reducer = (state: KeyData, action: Action): KeyData => {
  switch (action.type) {
    case KeyActionTypes.UPDATE_CAPTURES:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
