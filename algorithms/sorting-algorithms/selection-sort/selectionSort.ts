export const selectionSort = (numbers: number[]): number[] => {
  let min, temp;

  for (let i = 0; i < numbers.length; i++) {
    min = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }
    temp = numbers[min];
    numbers[min] = numbers[i];
    numbers[i] = temp;
  }

  return numbers;
};
