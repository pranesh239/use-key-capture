import { useEffect, useReducer, useRef } from 'react';
import reducer from './useKeyCaptureReducer';

import {
  initialState,
  getAction,
  useKeyActionTypes,
  useEnhancedReducer,
  targetItemPropsDefaultValue,
  handleRefAssignment
} from './useKeyCaptureUtils';

function useKeys() {
  const [keyData, dispatch] = useReducer(
    useEnhancedReducer(reducer),
    initialState
  );

  const targetItemRef = useRef(null);

  const dispatchWithActionDetails = event => {
    dispatch(getAction(event));
  };

  /**
   * It resets all state values to initial values
   */
  const resetKeyData = () => {
    dispatch({
      type: useKeyActionTypes.RESET_CAPTURES
    });
  };

  useEffect(() => {
    // example for IS_TRUSTED as false
    // setTimeout(() => {
    //   document.dispatchEvent(new KeyboardEvent('keydown'), { key: 'Escape' });
    // }, 2000);
    //
    let checkResetKeyPressed = dispatchWithActionDetails()
    if(checkResetKeyPressed.key){
      setTimeout(()=>{
        document.dispatchEvent(new KeyboardEvent('keydown'));
      },2000);
    }
    //
  }, [keyData]);

  useEffect(() => {
    const listenerItem = targetItemRef.current || document;
    listenerItem.addEventListener('keydown', dispatchWithActionDetails);

    return () => {
      listenerItem.removeEventListener('keydown', dispatchWithActionDetails);
    };
  }, []);

  const getTargetProps = ({ ref, type } = {}) => {
    return {
      type: type || targetItemPropsDefaultValue.type,
      ref: handleRefAssignment(ref, targetItemNode => {
        targetItemRef.current = targetItemNode;
      })
    };
  };

  return { keyData, getTargetProps, resetKeyData };
}

export default useKeys;
