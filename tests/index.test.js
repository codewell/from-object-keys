const fromObjectKeys = require("../lib/index.js");

const myObject = {
  foo: 123,
  bar: "hello world",
};

test("No args", () => {
  expect(fromObjectKeys()(myObject)).toEqual([]);
});

test("Undefined args", () => {
  expect(fromObjectKeys(null, undefined, NaN)(myObject)).toEqual([
    undefined,
    undefined,
    undefined,
  ]);
});

test("One arg: foo", () => {
  expect(fromObjectKeys("foo")(myObject)).toEqual([123]);
});

test("One arg: bar", () => {
  expect(fromObjectKeys("bar")(myObject)).toEqual(["hello world"]);
});

test("Two args: bar, foo", () => {
  expect(fromObjectKeys("bar", "foo")(myObject)).toEqual(["hello world", 123]);
});

test("Args not present", () => {
  expect(fromObjectKeys("far", "boo")(myObject)).toEqual([
    undefined,
    undefined,
  ]);
});
