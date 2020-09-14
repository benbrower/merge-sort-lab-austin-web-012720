function findMinAndRemoveSorted(arr) {
  // let min = arr[0];
  // let index = 0;
  // for (let i = 0; i < arr.length; i++){
  //   if (arr[i] < min){
  //     min = arr[i];
  //     index = i;
  //   }
  // }
  // arr.splice(index, 1);
  // return min;
  return arr.shift();
}

function merge(firstHalf, secondHalf) {
  let sorted = [];
  while (firstHalf.length > 0 && secondHalf.length > 0){
    if(firstHalf[0] < secondHalf[0]){
      sorted.push(findMinAndRemoveSorted(firstHalf))
    } else {
      sorted.push(findMinAndRemoveSorted(secondHalf))
    }
  }
  return sorted.concat(firstHalf).concat(secondHalf);
}

function mergeSort(arr){
  let sorted = [];
  let midPoint = arr.length /2;
  let firstHalf = arr.slice(1, midPoint);
  let secondHalf = arr.slice(midPoint, arr.length - 1);

  if (arr.length < 2){
    return arr;
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  return sorted;
}
