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

}

function mergeSort(arr){

}
