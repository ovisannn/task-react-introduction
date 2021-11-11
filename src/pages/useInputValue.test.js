import { renderHook, act } from '@testing-library/react-hooks';
import { useInputValue } from './useInputValue';

describe('Render', () => {
  it('Initial value', () => {
    const { result } = renderHook(
      () => useInputValue('Agus DM'));

    expect(result.current.value).toEqual('Agus DM');
  });

  it('Uppercase value', () => {
    const { result, rerender } = renderHook(
      () => useInputValue('Agus DM'));

    act(() => result.current.onChange({target: {value: 'Succes update'}}));
    rerender("a")
    expect(result.current.value).toEqual('Succes update');
  });

});