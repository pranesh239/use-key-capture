import { RefObject } from "react";
import { KeyActionTypes } from "./useKeyCaptureUtils";

export interface KeyData {
  key: string;
  /**
   *  @deprecated Use the "key" property instead
   * */
  keyCode: number;
  isTrusted: boolean;
  type: string;
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  spaceKey: boolean;
  isSpecialCharacter: boolean;
}

export interface Action {
  type: KeyActionTypes;
  payload?: any;
}

export type RefCallback<T> = (instance: T | null) => void;

export interface TargetProps {
  ref?: RefObject<HTMLElement> | RefCallback<HTMLElement>;
  type?: string;
}

export interface UseKeysResult {
  keyData: KeyData;
  resetKeyData: () => void;
  getTargetProps: (
    props?: TargetProps
  ) => {
    ref: (node: HTMLElement | null) => void;
    type?: string;
  };
}
