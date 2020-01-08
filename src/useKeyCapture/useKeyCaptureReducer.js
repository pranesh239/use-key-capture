import { useKeyInitialState, useKeyActionTypes } from './useKeyCaptureUtils';

export default function keyReducer(state, action) {
  switch (action.type) {
    case useKeyActionTypes.ESCAPE_KEY: {
      return {
        ...useKeyInitialState,
        isEscape: true
      };
    }

    case useKeyActionTypes.ENTER_KEY: {
      return {
        ...useKeyInitialState,
        isEnter: true
      };
    }

    case useKeyActionTypes.CAPS_ALPHABET: {
      return {
        ...useKeyInitialState,
        isCaps: true
      };
    }

    case useKeyActionTypes.SMALL_ALPHABET: {
      return {
        ...useKeyInitialState,
        isSmall: true
      };
    }

    case useKeyActionTypes.NUMBER: {
      return {
        ...useKeyInitialState,
        isNumber: true
      };
    }

    case useKeyActionTypes.SPACE: {
      return {
        ...useKeyInitialState,
        isSpace: true
      };
    }

    case useKeyActionTypes.ARROWS: {
      return {
        ...useKeyInitialState,
        isArrows: true,
        ...action.payload
      };
    }
    default:
      return { ...useKeyInitialState };
  }
}
