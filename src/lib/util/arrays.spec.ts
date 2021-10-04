import { arrayify, uniquify, toMap } from './arrays';

describe('The array utility', () => {
  describe('arrayify', () => {
    it('should wrap a non-array value into an array', () => {
      expect(arrayify(new Set([]))).toEqual([new Set([])]);
      expect(
        arrayify(
          new Map<string, string>([['myKey', 'myValue']])
        )
      ).toEqual([new Map<string, string>([['myKey', 'myValue']])]);
      expect(
        arrayify(
          new Map<number, string>([[0, 'myValue']])
        )
      ).toEqual([new Map<number, string>([[0, 'myValue']])]);
      expect(arrayify()).toEqual([]);
      expect(arrayify(1)).toEqual([1]);
      expect(arrayify(0)).toEqual([0]);
      expect(arrayify(new Error(`Don't worry, this is a test and this error is expected.`))).toEqual([
        new Error(`Don't worry, this is a test and this error is expected.`),
      ]);
      expect(arrayify('')).toEqual(['']);
      expect(arrayify({})).toEqual([{}]);
      expect(arrayify({ key: 'value' })).toEqual([{ key: 'value' }]);
      const testFunction = () => [];
      expect(arrayify(testFunction)).toEqual([testFunction]);
      expect(arrayify({ 0: 'This is an sample entry in an object' })).toEqual([{ 0: 'This is an sample entry in an object' }]);
    });

    it('should not modify an existing array', () => {
      expect(arrayify([])).toEqual([]);
      expect(arrayify([null])).toEqual([null]);
      expect(arrayify([undefined])).toEqual([undefined]);
      expect(arrayify(['This is an sample entry in an array'])).toEqual(['This is an sample entry in an array']);
    });
  });

  describe('uniquify', () => {
    it('should not modify arrays with unique entries, empty objects or other arrays', () => {
      expect(uniquify([])).toEqual([]);
      expect(uniquify([[], [], ['Sample array content'], ['Sample array content']])).toEqual([
        [],
        [],
        ['Sample array content'],
        ['Sample array content'],
      ]);
      expect(uniquify([null])).toEqual([null]);
      expect(uniquify([{}, {}, {}])).toEqual([{}, {}, {}]);
      expect(uniquify([undefined])).toEqual([undefined]);
      expect(uniquify([undefined, null])).toEqual([undefined, null]);
      expect(uniquify(['This is an sample entry in an array'])).toEqual(['This is an sample entry in an array']);
      expect(uniquify(['CASE_SESITIVE', 'case_sensitive'])).toEqual(['CASE_SESITIVE', 'case_sensitive']);
    });

    it('should remove duplicate entries from an array', () => {
      const testObject = { someKey: 'has some value' };
      expect(
        uniquify([
          '',
          'This entry exists several times',
          0,
          1,
          2,
          3,
          null,
          undefined,
          {},
          testObject,
          'This entry exists several times',
          1,
          2,
          undefined,
          undefined,
          testObject,
          3,
          'This entry exists several times',
          2,
          null,
          0,
          testObject,
          testObject,
          testObject,
          '',
          0,
          null,
          '',
        ])
      ).toEqual(['', 'This entry exists several times', 0, 1, 2, 3, null, undefined, {}, testObject]);
    });
  });

  describe('toMap', () => {
    it('should transform an array to a map', () => {
      const dataArray: Array<{ key: string; value: any }> = [
        { key: 'firstKey', value: 10 },
        { key: 'secondKey', value: 'Some test value' },
        { key: 'duplicateKey', value: 'duplicateValue' },
        { key: 'duplicateKey', value: 'duplicateValue' },
      ];

      const dataMap = toMap(dataArray, (value) => value.key.toLocaleUpperCase());

      expect(dataMap).toBeDefined();
      expect(dataMap.size).toBe(3);
      expect(dataMap.has('FIRSTKEY')).toBeTrue();
      expect(dataMap.has('DUPLICATEKEY')).toBeTrue();
      expect(dataMap.has('SECONDKEY')).toBeTrue();
      expect(dataMap.get('FIRSTKEY').value).toEqual(10);
      expect(dataMap.get('DUPLICATEKEY').value).toEqual('duplicateValue');
      expect(dataMap.get('SECONDKEY').value).toEqual('Some test value');
    });
  });
});
