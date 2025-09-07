import sortedHealth from "../health";

test("return correctly value 1", () => {
  const heroes = sortedHealth([
    { name: "Лучник", health: 10 },
    { name: "Мечник", health: 100 },
    { name: "Маг", health: 80 },
  ]);
  const result = [
    { name: "Мечник", health: 100 },
    { name: "Маг", health: 80 },
    { name: "Лучник", health: 10 },
  ];
  expect(heroes).toEqual(result);
});

test("return correctly value 2", () => {
  const heroes = sortedHealth([
    { name: "Лучник", health: 10 },
    { name: "Мечник", health: 100 },
    { name: "Маг", health: 80 },
  ]);
  const result = [
    { name: "Лучник", health: 10 },
    { name: "Мечник", health: 100 },
    { name: "Маг", health: 80 },
  ];
  expect(heroes).not.toBe(result);
});
