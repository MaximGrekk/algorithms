/*
Примеры:
count([]) // 0
count([[1, 5], [5, 10]]) // 1
count([[1, 5], [0, 1], [4, 5]]) // 2
count([[1, 10], [5, 6], [2, 3], [7, 8]]) // 2
count([[1, 2], [1, 10], [4, 9], [8, 15], [5, 6], [8, 16]]) // 4
*/

function compose(...functions) {
  return (initial) =>
    [...functions].reduce((result, current) => {
      return (result = current(result));
    }, initial);
}

function createArrsFromInput(input) {
  return input.map((innerArr) => {
    let tempInnerArr = [];
    for (let i = innerArr[0] + 1; i <= innerArr[innerArr.length - 1]; i++) {
      tempInnerArr = [...tempInnerArr, i];
    }
    return tempInnerArr;
  });
}

function reduceArrToObj(tempArr) {
  return tempArr.flat().reduce((result, current) => {
    return result[current] !== undefined && result[current] !== null
      ? { ...result, [current]: ++result[current] }
      : { ...result, [current]: 1 };
  }, {});
}

function countMax(obj) {
  return Object.values(obj).length === 0 ? 0 : Math.max(...Object.values(obj));
}

function count(input) {
  return compose(createArrsFromInput, reduceArrToObj, countMax)(input);
}

test(count([]), 0);
test(
  count([
    [1, 5],
    [5, 10],
  ]),
  1
);
test(
  count([
    [1, 5],
    [0, 1],
    [4, 5],
  ]),
  2
);
test(
  count([
    [1, 10],
    [5, 6],
    [2, 3],
    [7, 8],
  ]),
  2
);
test(
  count([
    [1, 2],
    [1, 10],
    [4, 9],
    [8, 15],
    [5, 6],
    [8, 16],
  ]),
  4
);
