import { useCallback } from 'react';

export const useKeyInitialState = {
  keyCode: null,
  keyName: null,
  isEscape: false,
  isEnter: false,
  isSpace: false,
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
  NUMBER: 'NUMBER'
};

const keyCodeMapper = {
  13: useKeyActionTypes.ENTER_KEY,
  27: useKeyActionTypes.ESCAPE_KEY
};

const isCapitalLetterPressed = key => /^[A-Z]$/.test(key);
const isSmallLetterPressed = key => /^[a-z]$/.test(key);

export const getActionType = eventDetails => {
  if (!eventDetails) {
    throw new Error('Event called with no details');
  }

  if (keyCodeMapper[eventDetails.keyCode])
    return keyCodeMapper[eventDetails.keyCode];

  if (isCapitalLetterPressed(eventDetails.key)) {
    return useKeyActionTypes.CAPS_ALPHABET;
  }

  if (isSmallLetterPressed(eventDetails.key)) {
    return useKeyActionTypes.SMALL_ALPHABET;
  }

  if (eventDetails.keyCode >= 48 && eventDetails.keyCode <= 57) {
    return useKeyActionTypes.NUMBER;
  }
  return 'SOME_OTHER_KEY';
};

export const useEnhancedReducer = reducer =>
  useCallback(
    (state, action) => {
      return reducer(state, action);
    },
    [reducer]
  );
