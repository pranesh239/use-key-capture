import React from 'react';
import useKey from '../../src/useKeyCapture';
import './styles.css';

const displayKeys = ['Enter', 'Escape', 'Tab', 'ArrowUp'];

const GlobalComponent = () => {
  const { keyData } = useKey();

  const getIsActive = key => (keyData.key === key ? 'active' : '');

  const getCombinedActiveClass = () =>
    keyData.key === 'A' && keyData.isWithShift ? 'active' : '';

  return (
    <>
      <div className="message">
        Press below mentioned keys to see the hook in action
      </div>
      <div className="container">
        {displayKeys.map(key => {
          return <div className={`box ${getIsActive(key)}`}>{key}</div>;
        })}
        <div className={`box ${getCombinedActiveClass()}`}>Shift + A</div>
      </div>
    </>
  );
};

export default GlobalComponent;
