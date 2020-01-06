import { useEffect, useReducer } from 'react';
import reducer from './useKeyCaptureReducer';

import {
  useKeyInitialState,
  getActionType,
  useKeyActionTypes,
  useEnhancedReducer
} from './useKeyCaptureUtils';

function useKeys() {
  const [keyData, dispatch] = useReducer(
    useEnhancedReducer(reducer),
    useKeyInitialState
  );

  const dispatchWithActionDetails = event => {
    dispatch({
      payload: event,
      type: getActionType(event)
    });
  };

  /**
   * It resets all state values to initial values
   */
  const resetKeyDetails = () => {
    dispatch({
      type: useKeyActionTypes.RESET_CAPTURES
    });
  };

  useEffect(() => {
    // example for IS_TRUSTED
    // setTimeout(() => {
    //   document.dispatchEvent(new KeyboardEvent('keydown'), { key: 'Escape' });
    // }, 2000);
  }, [keyData]);

  useEffect(() => {
    document.addEventListener('keydown', dispatchWithActionDetails);

    return () => {
      document.removeEventListener('keydown', dispatchWithActionDetails);
    };
  }, []);

  return { keyData, resetKeyDetails };
}

export default useKeys;
