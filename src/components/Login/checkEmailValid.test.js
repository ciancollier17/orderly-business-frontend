import checkEmailValid from './checkEmailValid';

it("Returns false if the email address does not contain @", () => {
  const output = checkEmailValid("hello.com")
  expect(output).toBeFalsy();
  expect(output).not.toBeUndefined();
});

it("Returns false if the email address does not contain a . after the @", () => {
  const output = checkEmailValid("hello@hicom");
  expect(output).toBeFalsy();
  expect(output).not.toBeUndefined();
});

it("Returns false if the email address contains special characters (excluding a single @)", () => {
  const output1 = checkEmailValid("hello!@hi.com");
  const output2 = checkEmailValid("he@llo@hi.com");

  expect(output1).toBeFalsy();
  expect(output1).not.toBeUndefined();
  expect(output2).toBeFalsy();
  expect(output2).not.toBeUndefined();
});

it("Returns false if the email address contains a space", () => {
  const output = checkEmailValid("he llo@hello.com");
  expect(output).toBeFalsy();
  expect(output).not.toBeUndefined();
});

it("Returns false if there is a . directly before or after the @", () => {
  const output1 = checkEmailValid("hello.@hello.com");
  const output2 = checkEmailValid("hello@.hello.com");

  expect(output1).toBeFalsy();
  expect(output1).not.toBeUndefined();
  expect(output2).toBeFalsy();
  expect(output2).not.toBeUndefined();
});

it("Returns false if there is a . at the beginning or end of the email", () => {
  const output1 = checkEmailValid(".hello@hello.com");
  const output2 = checkEmailValid("hello@.hello.com.");

  expect(output1).toBeFalsy();
  expect(output1).not.toBeUndefined();
  expect(output2).toBeFalsy();
  expect(output2).not.toBeUndefined();
});

it("Returns false if there is nothing before or after the @", () => {
  const output1 = checkEmailValid("@hello.com");
  const output2 = checkEmailValid("hello@");

  expect(output1).toBeFalsy();
  expect(output1).not.toBeUndefined();
  expect(output2).toBeFalsy();
  expect(output2).not.toBeUndefined();
});

it("Returns true if the email address is valid", () => {
  expect(checkEmailValid("hello@hello.com")).toBeTruthy();
  expect(checkEmailValid("hello@hi.hello.com")).toBeTruthy();
});
