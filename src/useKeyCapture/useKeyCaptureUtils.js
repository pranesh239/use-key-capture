import { useCallback } from 'react';

export const initialState = {
  // Pressed key
  key: null,

  isEscape: false,
  isEnter: false,
  isSpace: false,

  // Arrow keys
  isArrow: false,
  isArrowRight: false,
  isArrowLeft: false,
  isArrowUp: false,
  isArrowDown: false,

  isTab: false,

  // Modifier keys
  isWithShift: false,
  isWithCtrl: false,
  isWithMeta: false,
  isWithAlt: false,

  isNumber: false,

  // Character varients
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

const modifierKeys = {
  ctrlKey: 'Ctrl',
  shiftKey: 'Shift',
  altKey: 'Alt',
  metaKey: 'Meta'
};

const keyCodeMapper = {
  13: useKeyActionTypes.ENTER_KEY,
  27: useKeyActionTypes.ESCAPE_KEY,
  32: useKeyActionTypes.SPACE
};

const getArrowKeysPayload = key => {
  return {
    [`is${key}`]: true
  };
};

const isCapitalLetterPressed = key => /^[A-Z]$/.test(key);
const isSmallLetterPressed = key => /^[a-z]$/.test(key);

const getModifierPayload = eventDetails => {
  let modifierPayloadObj = {};
  const modifierObjKeys = Object.keys(modifierKeys);

  for (let key of modifierObjKeys) {
    if (eventDetails[key]) {
      modifierPayloadObj[`isWith${modifierKeys[key]}`] = true;
    }
  }

  return modifierPayloadObj;
};

/**
 * Returns the action type for the key pressed
 * @param {KeyboardEvent} eventDetails keyboard event object
 * @return {String}  action type
 */
export const getAction = eventDetails => {
  if (!eventDetails) {
    throw new Error('Event called with no details');
  }

  if (eventDetails.keyCode >= 24 && eventDetails.keyCode <= 27) {
    return {
      type: useKeyActionTypes.ARROWS,
      payload: {
        ...getArrowKeysPayload(eventDetails.key),
        ...getModifierPayload(eventDetails),
        key: eventDetails.key
      }
    };
  }

  let type;

  if (keyCodeMapper[eventDetails.keyCode])
    type = keyCodeMapper[eventDetails.keyCode];

  if (isCapitalLetterPressed(eventDetails.key)) {
    type = useKeyActionTypes.CAPS_ALPHABET;
  }

  if (isSmallLetterPressed(eventDetails.key)) {
    type = useKeyActionTypes.SMALL_ALPHABET;
  }

  if (eventDetails.keyCode >= 48 && eventDetails.keyCode <= 57) {
    type = useKeyActionTypes.NUMBER;
  }
  if (!type) {
    type = 'SOME_OTHER_KEY';
  }

  return {
    type,
    payload: { ...getModifierPayload(eventDetails), key: eventDetails.key }
  };
};

export const useEnhancedReducer = reducer =>
  useCallback(
    (state, action) => {
      return reducer(state, action);
    },
    [reducer]
  );
