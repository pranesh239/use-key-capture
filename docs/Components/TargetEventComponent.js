import React from 'react';
import useKey from '../../src/useKeyCapture';
import './styles.css';

const displayKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'Backspace'];

const TargetEventComponent = () => {
  const { keyData, getTargetProps } = useKey();

  const getIsActive = key => (keyData.key === key ? 'active' : '');

  return (
    <div className="container-target">
      <div className="message">
        Type QWERTY in the input element below. If the focus outside the target,
        we won't see any change.
      </div>
      <input {...getTargetProps()} />
      <div className="container">
        {displayKeys.map(key => {
          return <div className={`box ${getIsActive(key)}`}>{key}</div>;
        })}
      </div>
    </div>
  );
};

export default TargetEventComponent;
