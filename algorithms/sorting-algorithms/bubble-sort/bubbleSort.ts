/**
 *
 * @param numbers unsorted array of numbers
 * @returns soretd array of numbers in ascending order
 */
export const bubbleSort = (numbers: number[]): number[] => {
  let temp: number;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  return numbers;
};
