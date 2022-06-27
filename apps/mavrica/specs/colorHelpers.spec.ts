import {
  calcDecimalColor,
  calcLuminance,
  calcRelativeLuminance,
  getRelativeLuminance,
  sRGBToLin,
} from '../lib/color/helpers';

interface CalcTestCase {
  input: number;
  return: number;
}

describe('color helpers', () => {
  describe('calcDecimalColor', () => {
    const TEST_CASES: CalcTestCase[] = [
      { input: 0, return: 0 },
      { input: 255, return: 1 },
      { input: 25, return: 0.09803921568627451 },
    ];

    TEST_CASES.forEach((testCase) => {
      it(`should return ${testCase.return} for ${testCase.input}`, () => {
        expect(calcDecimalColor(testCase.input)).toBe(testCase.return);
      });
    });

    it('should throw an error if input is not a number', () => {
      // @ts-expect-error: input is not a number
      expect(() => calcDecimalColor('test')).toThrowError(
        'Color value is not a number.'
      );
    });

    it('should throw an error if input is out of range', () => {
      expect(() => calcDecimalColor(-1)).toThrowError(
        'Color value is out of expected range.'
      );
      expect(() => calcDecimalColor(256)).toThrowError(
        'Color value is out of expected range.'
      );
    });
  });

  describe('sRGBToLin', () => {
    const TEST_CASES: CalcTestCase[] = [
      { input: 0.1, return: 0.010022825574869039 },
      { input: 0.53674, return: 0.24963663658975774 },
      { input: 0.9, return: 0.7874122893956172 },
    ];

    TEST_CASES.forEach((testCase) => {
      it(`should return ${testCase.return} for ${testCase.input}`, () => {
        expect(sRGBToLin(testCase.input)).toBe(testCase.return);
      });
    });

    it('should throw an error if input is out of range', () => {
      expect(() => sRGBToLin(-0.0001)).toThrowError(
        'Color value is out of expected range.'
      );
      expect(() => sRGBToLin(1.0001)).toThrowError(
        'Color value is out of expected range.'
      );
    });
  });

  describe('calcLuminance', () => {
    const TEST_CASES = [
      {
        input: { r: 0, g: 0, b: 0 },
        return: 0,
      },
      { input: { r: 200, g: 20, b: 0 }, return: 0.12779671900127593 },
      { input: { r: 255, g: 255, b: 255 }, return: 1 },
    ];

    TEST_CASES.forEach((testCase) => {
      it(`should return ${testCase.return} for R: ${testCase.input.r} G: ${testCase.input.g} B: ${testCase.input.b}`, () => {
        expect(calcLuminance(testCase.input)).toBe(testCase.return);
      });
    });
  });

  describe('calcRelativeLuminance', () => {
    const TEST_CASES: CalcTestCase[] = [
      { input: 0, return: 0 },
      { input: 0.010022825574869039, return: 9.010442756551821 },
      { input: 1, return: 100 },
    ];

    TEST_CASES.forEach((testCase) => {
      it(`should return ${testCase.return} for ${testCase.input}`, () => {
        expect(calcRelativeLuminance(testCase.input)).toBe(testCase.return);
      });
    });
  });

  describe('getRelativeLuminance', () => {
    const TEST_CASES = [
      {
        input: { r: 0, g: 0, b: 0 },
        return: 0,
      },
      { input: { r: 32, g: 5, b: 22 }, return: 4.277512798001605 },
      { input: { r: 0, g: 126, b: 250 }, return: 53.83959133280561 },
      { input: { r: 255, g: 255, b: 255 }, return: 100 },
    ];

    TEST_CASES.forEach((testCase) => {
      it(`should return ${testCase.return} for R: ${testCase.input.r} G: ${testCase.input.g} B: ${testCase.input.b}`, () => {
        expect(getRelativeLuminance(testCase.input)).toBe(testCase.return);
      });
    });
  });
});
