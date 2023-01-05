


function mergeSort(arr) {
  const n = arr.length;
  if (n > 1) {
    const mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // sort the left side
    mergeSort(left);
    // sort the right side
    mergeSort(right);
    // merge the sorted left and right sides together
    merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  if (i === left.length) {
    // set remaining entries in arr to remaining values in right
    for (let l = j; l < right.length; l++) {
      arr[k] = right[l];
      k++;
    }
  } else {
    // set remaining entries in arr to remaining values in left
    for (let l = i; l < left.length; l++) {
      arr[k] = left[l];
      k++;
    }
  }
  return mergeSort;
}
