//Sum numbers from start to end-.
function recursiveSumOf(list) {
  debugger;
  if (list.length === 1){return list[0];} //escape-.
  let listTail = list.slice(1); //slice from 1 to end-. 
  return list[0] + recursiveSumOf(listTail); //recursion-.
}

let testList = [2, 4, 6, 8, 10];
recursiveSumOf(testList);
