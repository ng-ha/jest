function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow("you are using the ");
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(2);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);           //This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

const fetchData = () => {throw new Error}

test('the fetch fails with an error', () => {
  expect.assertions(4);
  // return fetchData().catch(e => expect(e).toMatch('error'));
});