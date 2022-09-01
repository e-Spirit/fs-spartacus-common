import { toRgbString, toPercentageValue, toIntValue } from './numbers';

describe('The numbers utility', () => {
  it('should ensure that an RGB string is generated at all times', () => {
    expect(toRgbString(0, 0, 0)).toBe('rgb(0, 0, 0)');
    expect(toRgbString(100, 150, 200)).toBe('rgb(100, 150, 200)');
    expect(toRgbString(255, 255, 255)).toBe('rgb(255, 255, 255)');
    expect(toRgbString(-1, -1, -1)).toBe('rgb(0, 0, 0)');
    expect(toRgbString(256, 256, 256)).toBe('rgb(255, 255, 255)');
    expect(toRgbString(null, null, null)).toBe('rgb(0, 0, 0)');
    expect(toRgbString(null, null, null, 'rgb(200, 150, 100)')).toBe('rgb(200, 150, 100)');
    expect(toRgbString(undefined, undefined, undefined)).toBe('rgb(0, 0, 0)');
    expect(toRgbString('255', '255', '255')).toBe('rgb(255, 255, 255)');
    expect(toRgbString('-1', '-1', '-1')).toBe('rgb(0, 0, 0)');
    expect(toRgbString('256', '256', '256')).toBe('rgb(255, 255, 255)');
    expect(toRgbString('', '', '')).toBe('rgb(0, 0, 0)');
    expect(toRgbString({} as any, {} as any, {} as any)).toBe('rgb(0, 0, 0)');
    expect(toRgbString('Some text', 'Some text', 'Some text')).toBe('rgb(0, 0, 0)');
  });

  it('should return percentage values or a fallback if processing of the percentage value is not possible', () => {
    expect(toPercentageValue(10, 100, 0)).toBe('10');
    expect(toPercentageValue(10, 100, 1)).toBe('10.0');
    expect(toPercentageValue(10, 100, 2)).toBe('10.00');
    expect(toPercentageValue(0, 100, 0)).toBe('0');
    expect(toPercentageValue(100, 0, 0)).toBe('0');
    expect(toPercentageValue(100, 0, 2)).toBe('0');
    expect(toPercentageValue('10' as any, '100' as any, 2)).toBe('10.00');
    expect(toPercentageValue({} as any, {} as any, 2)).toBe('0');
  });

  it('should convert input values into a number, if necessary and possible. Otherwise, 0 should be returned.', () => {
    expect(toIntValue(10)).toBe(10);
    expect(toIntValue(10.0)).toBe(10);
    expect(toIntValue('10')).toBe(10);
    expect(toIntValue(null, 123)).toBe(123);
    expect(toIntValue({})).toBe(0);
    expect(toIntValue(NaN)).toBe(0);
    expect(toIntValue(10.0)).toBe(10.0);
    expect(toIntValue(null)).toBe(0);
    expect(toIntValue(undefined)).toBe(0);
    expect(toIntValue(true)).toBe(0);
    expect(toIntValue(false)).toBe(0);
    expect(toIntValue([])).toBe(0);
  });
});
