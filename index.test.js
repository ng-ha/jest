// function compileAndroidCode() {
//   throw new Error("you are using the wrong JDK!");
// }

// test("compiling android goes as expected", () => {
//   expect(compileAndroidCode).toThrow();
//   expect(compileAndroidCode).toThrow(Error);

//   // You can also use a string that must be contained in the error message or a regexp
//   expect(compileAndroidCode).toThrow("you are using the ");
//   expect(compileAndroidCode).toThrow(/JDK/);

//   // Or you can match an exact error message using a regexp like below
//   expect(compileAndroidCode).toThrow(/^you are using the wrong JDK!$/); // Test pass
// });

//---------------------------------------------------------------

// const shoppingList = [
//   "diapers",
//   "kleenex",
//   "trash bags",
//   "paper towels",
//   "milk",
// ];

// test("the shopping list has milk on it", () => {
//   expect(shoppingList).toContain("milk");
//   expect(new Set(shoppingList)).toContain("milk");
// });

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// test('but there is a "stop" in Christoph', () => {
//   expect("Christoph").toMatch(/stop/);
// });

// test("two plus two", () => {
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(2);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);

//   // toBe and toEqual are equivalent for numbers
//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });
// test("adding floating point numbers", () => {
//   const value = 0.1 + 0.2;
//   // expect(value).toBe(0.3);           //This won't work because of rounding error
//   expect(value).toBeCloseTo(0.3); // This works.
// });


//-------------------------------------------------------------

// function forEach(items, callback) {
//   for (let index = 0; index < items.length; index++) {
//     callback(items[index]);
//   }
// }
// const mockCallback = jest.fn(x => 42 + x);

// test.only('forEach mock function', () => {
//   forEach([0, 1], mockCallback);

//   // The mock function was called twice
//   expect(mockCallback.mock.calls).toHaveLength(2);

//   // The first argument of the first call to the function was 0
//   expect(mockCallback.mock.calls[0][0]).toBe(0);

//   // The first argument of the second call to the function was 1
//   expect(mockCallback.mock.calls[1][0]).toBe(1);

//   // The return value of the first call to the function was 42
//   expect(mockCallback.mock.results[0].value).toBe(42);
//   expect(mockCallback.mock.results[1].value).toBe(43);
// });

//---------------------------------------------------------------------

// const myMock1 = jest.fn();
// const a = new myMock1();
// console.log(myMock1.mock.instances);
// // > [ <a> ]

// const myMock2 = jest.fn();
// const b = {};
// const bound = myMock2.bind(b);
// bound();
// console.log(myMock2.mock.contexts);
// // > [ <b> ]

//----------------------------------------------------------------------

// const myMock = jest.fn();
// console.log(myMock());
// // > undefined

// myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

// console.log(myMock(), myMock(), myMock(), myMock(), myMock());
// // > 10, 'x', true, true

//------------------------------------------------------------------------
//test.js
// import defaultExport, {bar, foo} from './foo-bar-baz';

// jest.mock('../foo-bar-baz', () => {
//   const originalModule = jest.requireActual('../foo-bar-baz');

//   //Mock the default export and named export 'foo'
//   return {
//     __esModule: true,
//     ...originalModule,
//     default: jest.fn(() => 'mocked baz'),
//     foo: 'mocked foo',
//   };
// });

// test('should do a partial mock', () => {
//   const defaultExportResult = defaultExport();
//   expect(defaultExportResult).toBe('mocked baz');
//   expect(defaultExport).toHaveBeenCalled();

//   expect(foo).toBe('mocked foo');
//   expect(bar()).toBe('bar');
// });

//------------------------------------------------------
const {format: prettyFormat} = require('pretty-format');

const val = {object: {}};
val.circularReference = val;
val[Symbol('foo')] = 'foo';
val.map = new Map([['prop', 'value']]);
val.array = [-0, Infinity, NaN];

console.log(val);