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