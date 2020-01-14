import validateLogin from './validateLogin';

it("Fails if either email or password empty", () => {
  expect(() => validateLogin("", "hello")).toThrow("You must enter your email.");
  expect(() => validateLogin("hello", "")).toThrow("You must enter your password.");
});

it("Fails if email address is invalid", () => {
  expect(() => validateLogin("hellohello", "hello")).toThrow("The email you entered is invalid.");
});

it("Returns email and password if everything is ok", () => {
  expect(validateLogin("hello@hello.com", "password123")).toEqual(["hello@hello.com", "password123"]);
});
