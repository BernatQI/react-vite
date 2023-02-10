import { getMsg } from '../../src/components/basics-tests/Strings';

describe('Tests on Strings', () => {
  test('getMsg() should return "BernatQi: Dev & SEO"', () => {
    const name = 'BernatQi';
    const role = 'Dev & SEO';
    const msg = getMsg(name, role);

    expect(msg).toBe(`${name}: ${role}`);
  })
})