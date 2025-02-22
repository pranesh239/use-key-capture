import type { KeyData } from "./types";

export enum KeyActionTypes {
  UPDATE_CAPTURES = "UPDATE_CAPTURES",
  RESET_CAPTURES = "RESET_CAPTURES"
}

export const initialState: KeyData = {
  key: "",
  keyCode: 0,
  isTrusted: false,
  type: "",
  altKey: false,
  ctrlKey: false,
  metaKey: false,
  shiftKey: false,
  spaceKey: false,
  isSpecialCharacter: false,
  isNumber: false
};
