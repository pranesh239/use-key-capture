import { MutableRefObject } from "react";
import type { KeyData, Action, TargetProps } from "./types";
import { KeyActionTypes, initialState } from "./constants";

export const targetItemPropsDefaultValue: TargetProps = {
  type: "text"
};

const isSpecialCharacter = (key: string): boolean => {
  if (typeof key !== "string" || key.length !== 1) {
    return false;
  }
  return /^[!@#$%^&*()_+<>?:"{}[\]';.,|/\-\\=_+~`]$/.test(key);
};

const isNumberPressed = (key: string) => /^[0-9]/.test(key);

export const getAction = (event: KeyboardEvent): Action => {
  const { key, keyCode, isTrusted, type, altKey, ctrlKey, metaKey, shiftKey } = event;
  return {
    type: KeyActionTypes.UPDATE_CAPTURES,
    payload: {
      key,
      // Soon keyCode will be removed
      keyCode,
      isTrusted,
      type,
      altKey,
      ctrlKey,
      metaKey,
      shiftKey,
      spaceKey: key === " ",
      isSpecialCharacter: isSpecialCharacter(key),
      isNumber: isNumberPressed(key)
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
    if (typeof ref === "function") {
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
