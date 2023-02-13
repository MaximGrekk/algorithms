import { test } from "./tester";

/*
Задача: написать функцию для прохождения типового задания с числами в тесте IQ — из списка чисел найти то, которое отличается по чётности от остальных, и вернуть его позицию.

Примеры:
iqTest("2 4 7 8 10") => 3
iqTest("1 2 1 1") => 2
*/

function iqTest(numbersStr) {
  const oddEvenObj = numbersStr.split(" ").reduce((result, current, index) => {
    const currentNumber = +current;
    if (currentNumber % 2 === 0)
      typeof result.even === "undefined"
        ? (result.even = [{ value: currentNumber, index }])
        : (result.even = [...result.even, { value: currentNumber, index }]);
    else
      result.odd === undefined
        ? (result.odd = [{ value: currentNumber, index }])
        : (result.odd = [...result.odd, { value: currentNumber, index }]);

    return result;
  }, {});
  return oddEvenObj.even.length > 1
    ? oddEvenObj.odd[0].index + 1
    : oddEvenObj.even[0].index + 1;
}

test(iqTest("2 4 7 8 10"), 3);
test(iqTest("1 2 1 1"), 2);
