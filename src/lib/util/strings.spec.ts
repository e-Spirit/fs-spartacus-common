import { isString } from './strings';

describe('The string utility', () => {
  it('should recognize strings as strings', () => {
    expect(isString('')).toBeTrue();
    expect(isString('This is a string')).toBeTrue();
  });

  it('should not recognize other data types as strings', () => {
    expect(isString(null)).toBeFalse();
    const notDefined = undefined;
    expect(isString(notDefined)).toBeFalse();
    expect(isString()).toBeFalse();
    expect(isString(1)).toBeFalse();
    expect(isString(0)).toBeFalse();
    expect(isString({})).toBeFalse();
    expect(isString({ key: 'value' })).toBeFalse();
    expect(isString(() => {})).toBeFalse();
    expect(isString(() => 'This is a string that this function will return')).toBeFalse();
    expect(isString([])).toBeFalse();
    expect(isString([1, 2])).toBeFalse();
    expect(isString(['This is an sample entry in an array'])).toBeFalse();
    expect(isString(new Error('Some error message'))).toBeFalse();
  });
});
