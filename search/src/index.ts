/**
 * Implementa la búsqueda lineal para encontrar un elemento en un arreglo.
 *
 * @param {T[]} arreglo El arreglo a buscar.
 * @param {T} elemento El elemento a buscar.
 * @returns {number | undefined} El índice del elemento si se encuentra, o `undefined` si no se encuentra.
 */

function linearSearch<T>(array: T[], target: T): number | undefined {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return undefined;
}

// const numbers: number[] = [10, 22, 34, 45, 56];
// const targetElement: number = 34;

// const index = linearSearch(numbers, targetElement);

// if (index !== undefined) {
//   console.log(`The element ${targetElement} was found at index ${index}`);
// } else {
//   console.log(`The element ${targetElement} was not found in the array`);
// }


/**
 * Implementa la búsqueda binaria para encontrar un elemento en un arreglo ordenado.
 *
 * @param {T[]} arreglo El arreglo ordenado a buscar.
 * @param {T} elemento El elemento a buscar.
 * @returns {number | undefined} El índice del elemento si se encuentra, o `undefined` si no se encuentra.
 *
 * Precondición: El arreglo debe estar ordenado ascendentemente.
 */

function binarySearch<T>(array: T[], target: T): number | undefined {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midElement = array[mid];

    if (midElement === target) {
      return mid;
    } else if (midElement < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return undefined;
}

const numbers: number[] = [10, 22, 34, 45, 56, 78, 91, 100];
const targetElement: number = 45;

const index = binarySearch(numbers, targetElement);

if (index !== undefined) {
  console.log(`The element ${targetElement} was found at index ${index}`);
} else {
  console.log(`The element ${targetElement} was not found in the array`);
}
