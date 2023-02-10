describe('Tests on <DemoComponent />', () => {

  test('This test sould not fail', () => {

    const operation = 6 > 9;

    const msg1 = 'Hello World';

    const msg2 = msg1.trim();

    expect(msg1).toBe(msg2);
  });

});