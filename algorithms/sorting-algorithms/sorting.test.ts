import { bubbleSort } from "./bubble-sort/bubbleSort";
import { selectionSort } from "./selection-sort/selectionSort";

const ARRAY_SIZE = 10;
const MAX_VALUE = 100;

describe("Sorting Algorithms", () => {
  const randomNumbers = randomNumberArrayGenerator(ARRAY_SIZE, MAX_VALUE);
  const sortedRandomNumbers = [...randomNumbers].sort((a, b) => a - b);

  test("Selection sort", () => {
    expect(selectionSort([...randomNumbers])).toEqual(sortedRandomNumbers);
  });

  test("Bubble sort", () => {
    expect(bubbleSort([...randomNumbers])).toEqual(sortedRandomNumbers);
  });
});

function randomNumberArrayGenerator(size: number, max: number): number[] {
  const randomNumbers: number[] = [];

  for (let i = 0; i < size; i++) {
    randomNumbers.push(Math.floor(Math.random() * max));
  }

  return randomNumbers;
}
