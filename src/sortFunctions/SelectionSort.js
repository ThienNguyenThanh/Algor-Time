export async function* SelectionSort(array, swap, highlight,unHighlight, marksort) {
  // for (let i = 0; i < array.length; i++) {
  for (let idx = 0; idx < array.length; idx++) {
        
    let minIndex = idx;

    for (var nextIdx = idx + 1; nextIdx < array.length; nextIdx++) {
      yield await highlight([minIndex,nextIdx])

      if (array[minIndex] > array[nextIdx]) {
        minIndex = nextIdx;
        yield await highlight([minIndex])
      }
    }

    yield await unHighlight()
    if (minIndex !== idx) {
      yield await swap(idx, minIndex);
    }

    marksort(idx);
    yield;
  }
  
}
