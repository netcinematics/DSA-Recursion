//Example from materials

function recursiveSumOf(list) {
  // Base Case -> exit condition
  if (list.length === 1) {
    return list[0];
  }

  //Recursive case
  return list[0] + recursiveSumOf(list.slice(1));
}

let testList = [2, 4, 6, 8, 10];
