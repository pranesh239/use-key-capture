import { useEffect, useReducer, useRef } from "react";
import reducer from "./useKeyCaptureReducer";
import type { TargetProps, UseKeysResult } from "./types";

import { initialState, KeyActionTypes } from "./constants";
import {
  getAction,
  useEnhancedReducer,
  targetItemPropsDefaultValue,
  handleRefAssignment
} from "./useKeyCaptureUtils";

function useKeys(): UseKeysResult {
  const [keyData, dispatch] = useReducer<typeof reducer>(useEnhancedReducer(reducer), initialState);

  const targetItemRef = useRef<HTMLElement | null>(null);

  const dispatchWithActionDetails = (event: Event) => {
    if (event instanceof KeyboardEvent) {
      dispatch(getAction(event));
    }
  };

  const resetKeyData = () => {
    dispatch({
      type: KeyActionTypes.RESET_CAPTURES
    });
  };

  useEffect(() => {
    const listenerItem = targetItemRef.current || document;
    listenerItem.addEventListener("keydown", dispatchWithActionDetails);

    return () => {
      listenerItem.removeEventListener("keydown", dispatchWithActionDetails);
    };
  }, []);

  const getTargetProps = ({ ref, type }: TargetProps = {}) => {
    return {
      ref: (node: HTMLElement | null) => handleRefAssignment(node, ref, targetItemRef),
      type: type || targetItemPropsDefaultValue.type
    };
  };

  return {
    keyData,
    resetKeyData,
    getTargetProps
  };
}

export { useKeys };
