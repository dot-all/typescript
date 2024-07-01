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

const numbers: number[] = [10, 22, 34, 45, 56];
const targetElement: number = 34;

const index = linearSearch(numbers, targetElement);

if (index !== undefined) {
  console.log(`The element ${targetElement} was found at index ${index}`);
} else {
  console.log(`The element ${targetElement} was not found in the array`);
}
