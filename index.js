function findMinAndRemoveSorted(arr) {
  let min = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
      index = i;
    }
  }
  arr.splice(index, 1);
  return min;
}

function merge(firstHalf, secondHalf) {
  let sorted = [];
  while (firstHalf.length > 0 && secondHalf.length > 0){
    if(firstHalf[0] < secondHalf[0]){
      sorted.push(findMinAndRemoveSorted(firstHalf[0]))
    } else {
      sorted.push(findMinAndRemoveSorted(secondHalf[0]))
    }
  }
  return sorted.concat(firstHalf).concat(secondHalf);
}

function mergeSort(arr){

}
