/*
Примеры:
validateparenthesis('(((())()))') => true
validateparenthesis('())') => false
validateparenthesis(')(') => false
*/

function validateparenthesis(text) {
  const tempArr = [...text.split("")];
  let counter = 0;
  for (const symb of tempArr) {
    symb === "(" ? ++counter : --counter;
    if (counter >= 0) continue;
    else break;
  }
  return counter === 0 ? true : false;
}

test(validateparenthesis("(((())()))"), true);
test(validateparenthesis("())"), false);
test(validateparenthesis(")("), false);
