
export function selectingSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let a = arr[i]
      let b = arr[minIndex]

      arr[i] = b;
      arr[minIndex] = a;
    }
  }

  return arr;
}