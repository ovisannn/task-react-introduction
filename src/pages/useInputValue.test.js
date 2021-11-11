import { renderHook, act } from '@testing-library/react-hooks';
import { useInputValue } from './useInputValue';

describe('Render', () => {
  it('Initial value', () => {
    const { result } = renderHook(
      () => useInputValue('ovi san'));

    expect(result.current.value).toEqual('ovi san');
  });

  it('Uppercase value', () => {
    const { result, rerender } = renderHook(
      () => useInputValue('ovi san'));

    act(() => result.current.onChange({target: {value: 'Succes update'}}));
    rerender("a")
    expect(result.current.value).toEqual('Succes update');
  });

});