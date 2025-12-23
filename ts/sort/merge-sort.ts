
export function mergeSort(arr: number[], p = 0, r = arr.length): number[] {
  if (p < r - 1) {
    let q = Math.floor((p + r) / 2);
    mergeSort(arr, p, q);
    mergeSort(arr, q, r);
    merge(arr, p, q, r); 
  }

  return arr;
}

function merge(arr: number[], p: number, q: number, r: number): number[] {
  let n1 = q - p;
  let n2 = r - q;
  let L = new Array(n1 + 1);
  let R = new Array(n2 + 1);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[p + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[q + j];
  }

  L[n1] = Infinity;
  R[n2] = Infinity;

  let i = 0;
  let j = 0;
  for (let k = p; k < r; k++) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
  }

  return arr;
}
