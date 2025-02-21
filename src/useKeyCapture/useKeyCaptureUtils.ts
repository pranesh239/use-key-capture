import { RefObject, MutableRefObject } from 'react';
import type { KeyData, Action } from './types';

export enum KeyActionTypes {
  UPDATE_CAPTURES = 'UPDATE_CAPTURES',
  RESET_CAPTURES = 'RESET_CAPTURES'
};

export const initialState: KeyData = {
  key: '',
  keyCode: 0,
  isTrusted: false,
  type: '',
  altKey: false,
  ctrlKey: false,
  metaKey: false,
  shiftKey: false
};

export const targetItemPropsDefaultValue = {
  ref: null,
  type: ''
};

export const getAction = (event: KeyboardEvent): Action => {
  const { key, keyCode, isTrusted, type, altKey, ctrlKey, metaKey, shiftKey } = event;
  return {
    type: KeyActionTypes.UPDATE_CAPTURES,
    payload: {
      key,
      keyCode,
      isTrusted,
      type,
      altKey,
      ctrlKey,
      metaKey,
      shiftKey
    }
  };
};

type RefCallback<T> = (instance: T | null) => void;

export const handleRefAssignment = (
  node: HTMLElement | null,
  ref: MutableRefObject<HTMLElement | null> | RefCallback<HTMLElement> | undefined,
  targetItemRef: MutableRefObject<HTMLElement | null>
): void => {
  if (ref) {
    if (typeof ref === 'function') {
      (ref as RefCallback<HTMLElement>)(node);
    } else {
      ref.current = node;
    }
  }
  targetItemRef.current = node;
};

export const useEnhancedReducer = (reducer: (state: KeyData, action: Action) => KeyData) => {
  return (state: KeyData, action: Action): KeyData => {
    if (action.type === KeyActionTypes.RESET_CAPTURES) {
      return initialState;
    }
    return reducer(state, action);
  };
};
