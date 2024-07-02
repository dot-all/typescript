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

const selectionSortedArray = selectionSort([64, 25, 12, 22, 11]);
console.log("Selection Sorted Array:", selectionSortedArray);


/**
 * Ordena una lista de números utilizando el algoritmo Insertion Sort.
 * @param arr - Arreglo de números a ordenar.
 * @returns Arreglo de números ordenado.
 */
function insertionSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Mueve el elemento hacia la derecha
      j = j - 1;
    }
    arr[j + 1] = key; // Inserta el elemento en la posición correcta
  }
  return arr;
}

const insertionSortedArray = insertionSort([12, 11, 13, 5, 6]);
console.log("Insertion Sorted Array:", insertionSortedArray);


/**
 * Ordena una lista de números utilizando el algoritmo Quick Sort.
 * @param arr - Arreglo de números a ordenar.
 * @returns Arreglo de números ordenado.
 */
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr; // Caso base: arreglo de longitud 1 o 0 ya está ordenado
  }

  const pivot = arr[Math.floor(arr.length / 2)]; // Selecciona el pivote
  const left = arr.filter(x => x < pivot); // Elementos menores que el pivote
  const right = arr.filter(x => x > pivot); // Elementos mayores que el pivote
  const middle = arr.filter(x => x === pivot); // Elementos iguales al pivote

  return [...quickSort(left), ...middle, ...quickSort(right)]; // Concatena los resultados
}

const quickSortedArray = quickSort([3, 6, 8, 10, 1, 2, 1]);
console.log("Quick Sorted Array:", quickSortedArray);