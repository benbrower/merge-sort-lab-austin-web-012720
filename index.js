//find and remove minumum in a sorted array
function findMinAndRemoveSorted(array) {
  return array.shift();
}

//merge two sorted sub arrays into a single array
function merge(arr0, arr1) {
  let sorted = [];

  while (arr0.length != 0 && arr1.length != 0) {
    if (arr0[0] < arr1[0]) {
      sorted.push(findMinAndRemoveSorted(arr0));
    } else {
      sorted.push(findMinAndRemoveSorted(arr1));
    }
  }
  return sorted.concat(arr0).concat(arr1);
}

//mergeSort algorithim using merge and findMinAndRemove
function mergeSort(arr) {
  let mid = arr.length / 2;
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid, arr.length);
  let sorted = []; //array to return

  if (arr.length < 2) {
    return arr;
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  return sorted;
}
