const text = "David Niño";

test("Debe contener un texto", () => {
  expect(text).toMatch(/David/);
});
