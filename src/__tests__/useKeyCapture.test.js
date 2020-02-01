import { cleanup } from '@testing-library/react';
import { setUpHook } from '../testUtils';

describe('useKeyCapture', () => {
  afterEach(cleanup());

  it('should have some result', () => {
    const hook = setUpHook();
    console.log('hook', hook);
    expect(2).toBe(3);
  });
});
