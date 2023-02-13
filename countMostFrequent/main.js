import { test } from "./tester";

/*
Задача: найти, сколько раз встречается самый частый элемент в объединении двух отсортированных по возрастанию массивов. Элементы могут повторяться.

Примеры:
countMostFrequent([1, 2, 2, 3], [0, 2, 4, 4]) => 3
countMostFrequent([], [0, 0]) => 2
*/

function countMostFrequent(firstArray, secondArray) {
  const result = [...firstArray, ...secondArray]
    .flat()
    .reduce((result, current) => {
      if (typeof result[current] !== "undefined") {
        result[current]++;
      } else {
        result[current] = 1;
      }
      return result;
    }, {});
  let number = 0;
  for (res in result) {
    if (result[res] > number) number = result[res];
  }
  return number;
}

test(countMostFrequent([1, 2, 2, 3], [0, 2, 4, 4]), 3);
test(countMostFrequent([], [0, 0]), 2);
