export async function* BubbleSort(array, swap, highlight,unHighlight, marksort) {
  
  let swapped;
    let arrLen = array.length
    do{
      swapped = false
      let idx = 0;
      arrLen -=1
        for(idx; idx < arrLen;idx++){
          yield await highlight([idx, idx + 1]);

          if(array[idx] > array[idx + 1]){
              yield await swap(idx, idx + 1);
              swapped = true
          }
        }
        marksort(idx)
        yield
    } while (swapped)
    marksort(0)
}
