/**
 * Ordena una lista de números utilizando el algoritmo Bubble Sort.
 * @param arr - Arreglo de números a ordenar.
 * @returns Arreglo de números ordenado.
 */

function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Intercambio de elementos
      }
    }
  }
  return arr;
}

const bubbleSortedArray = bubbleSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Bubble Sorted Array:", bubbleSortedArray);

/**
 * Ordena una lista de números utilizando el algoritmo Selection Sort.
 * @param arr - Arreglo de números a ordenar.
 * @returns Arreglo de números ordenado.
 */
function selectionSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Encuentra el índice del elemento mínimo
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Intercambio de elementos
  }
  return arr;
}