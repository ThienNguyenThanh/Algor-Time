export async function* SelectionSortGen(array, swap, highlight, marksort) {
    for (let i = 0; i < array.length; i++) {
      let maxIndex = 0;
      for (var j = 0; j < array.length - i; j++) {
        yield await highlight([maxIndex, j]);
  
        if (array[maxIndex] < array[j]) {
          maxIndex = j;
        }
      }
  
      j = j - 1;
      if (maxIndex !== j && array[maxIndex] !== array[j]) {
        yield await swap(maxIndex, j);
      }
  
      marksort(j);
      yield;
    }
  }

// export async function* SelectionSortGen(array, swap, highlight, marksort) {
//       for (let idx = 0; idx < array.length; idx++) {
        
//         let minIndex = idx;
//         for (var nextIdx = idx + 1; nextIdx < array.length; nextIdx++) {
//           yield await highlight([minIndex, nextIdx]);
    
//           if (array[minIndex] > array[nextIdx]) {
//             minIndex = nextIdx;
//           }
//         }
    
//         if (minIndex !== idx) {
//           yield await swap(idx, minIndex);
//         }
    
//         marksort(idx);
//         yield;
//         }
//       }
    