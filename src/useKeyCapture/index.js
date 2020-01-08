import { useEffect, useReducer } from 'react';
import reducer from './useKeyCaptureReducer';

import {
  useKeyInitialState,
  getAction,
  useKeyActionTypes,
  useEnhancedReducer
} from './useKeyCaptureUtils';

function useKeys() {
  const [keyData, dispatch] = useReducer(
    useEnhancedReducer(reducer),
    useKeyInitialState
  );

  const dispatchWithActionDetails = event => {
    dispatch(getAction(event));
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
    // example for IS_TRUSTED as false
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
