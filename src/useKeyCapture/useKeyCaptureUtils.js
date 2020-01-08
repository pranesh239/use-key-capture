import { useCallback } from 'react';

export const useKeyInitialState = {
  keyCode: null,
  keyName: null,
  isEscape: false,
  isEnter: false,
  isSpace: false,
  isArrows: false,
  isRightArrow: false,
  isLeftArrow: false,
  isUpArrow: false,
  isDownArrow: false,
  isTab: false,
  isWithShift: false,
  isWithCtrl: false,
  isNumber: false,
  isCaps: false,
  isSmall: false,
  isSpecialCharacter: false
};

export const useKeyActionTypes = {
  ENTER_KEY: 'ENTER_KEY',
  ESCAPE_KEY: 'ESCAPE_KEY',
  RESET_CAPTURES: 'RESET_CAPTURES',
  CAPS_ALPHABET: 'CAPS',
  SMALL_ALPHABET: 'SMALL',
  NUMBER: 'NUMBER',
  SPACE: 'SPACE',
  ARROWS: 'ARROWS'
};

const arrowKeysMapper = {
  24: 'UpArrow',
  25: 'DownArrow',
  26: 'RightArrow',
  27: 'LeftArrow'
};

const keyCodeMapper = {
  13: useKeyActionTypes.ENTER_KEY,
  27: useKeyActionTypes.ESCAPE_KEY,
  32: useKeyActionTypes.Error
};

const getArrowKeysPayload = keyCode => {
  return {
    [`is${arrowKeysMapper[keyCode]}`]: true
  };
};

const isCapitalLetterPressed = key => /^[A-Z]$/.test(key);
const isSmallLetterPressed = key => /^[a-z]$/.test(key);

/**
 * Returns the action type for the key pressed
 * @param {KeyboardEvent} eventDetails keyboard event object
 * @return {String}  action type
 */
export const getAction = eventDetails => {
  if (!eventDetails) {
    throw new Error('Event called with no details');
  }

  if (keyCodeMapper[eventDetails.keyCode]) {
    return { type: useKeyActionTypes.SPACE };
  }

  if (keyCodeMapper[eventDetails.keyCode])
    return { type: keyCodeMapper[eventDetails.keyCode] };

  if (isCapitalLetterPressed(eventDetails.key)) {
    return { type: useKeyActionTypes.CAPS_ALPHABET };
  }

  if (isSmallLetterPressed(eventDetails.key)) {
    return { type: useKeyActionTypes.SMALL_ALPHABET };
  }

  if (eventDetails.keyCode >= 48 && eventDetails.keyCode <= 57) {
    return { type: useKeyActionTypes.NUMBER };
  }

  if (eventDetails.keyCode >= 24 && eventDetails.keyCode <= 27) {
    return {
      type: useKeyActionTypes.ARROWS,
      payload: getArrowKeysPayload(eventDetails.keyCode)
    };
  }

  return { type: 'SOME_OTHER_KEY' };
};

export const useEnhancedReducer = reducer =>
  useCallback(
    (state, action) => {
      return reducer(state, action);
    },
    [reducer]
  );

// {
//   payload: event,
//   type: getActionType(event)
// }
