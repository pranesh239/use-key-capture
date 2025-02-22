import { RefObject } from "react";
import { KeyActionTypes } from "./constants";

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
  isNumber: boolean;
}

export type Action = {
  type: KeyActionTypes;
  payload?: KeyData;
};

export type RefCallback<T> = (instance: T | null) => void;

export interface TargetProps {
  ref?: RefObject<HTMLElement> | RefCallback<HTMLElement> | undefined;
  type?: React.HTMLInputTypeAttribute;
}

export interface UseKeysResult {
  keyData: KeyData;
  resetKeyData: () => void;
  getTargetProps: (props?: TargetProps) => {
    ref: (node: HTMLElement | null) => void;
    type?: string;
  };
}
