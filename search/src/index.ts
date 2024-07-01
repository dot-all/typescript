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

// const numbers: number[] = [10, 22, 34, 45, 56, 78, 91, 100];
// const targetElement: number = 45;

// const index = binarySearch(numbers, targetElement);

// if (index !== undefined) {
//   console.log(`The element ${targetElement} was found at index ${index}`);
// } else {
//   console.log(`The element ${targetElement} was not found in the array`);
// }



/**
 * Implementa la búsqueda por hash para encontrar un elemento en una tabla hash.
 *
 * @param {HashTable<T, U>} hashTable La tabla hash donde se realizará la búsqueda.
 * @param {T} key La clave del elemento a buscar.
 * @returns {U | undefined} El valor asociado con la clave si se encuentra, o `undefined` si no se encuentra.
 *
 * Precondición: La tabla hash debe estar inicializada y contener elementos.
 */


class HashTable<T, U> {
  private table: Map<T, U>;

  constructor() {
    this.table = new Map<T, U>();
  }

  set(key: T, value: U): void {
    this.table.set(key, value);
  }

  get(key: T): U | undefined {
    return this.table.get(key);
  }

  has(key: T): boolean {
    return this.table.has(key);
  }

  delete(key: T): void {
    this.table.delete(key);
  }
}

function hashSearch<T, U>(hashTable: HashTable<T, U>, key: T): U | undefined {
  return hashTable.get(key);
}


interface Person {
  name: string;
  age: number;
}

const people: HashTable<string, Person> = new HashTable();

const person1: Person = { name: "John Doe", age: 30 };
const person2: Person = { name: "Jane Doe", age: 25 };
const person3: Person = { name: "Peter Jones", age: 40 };

people.set("John Doe", person1);
people.set("Jane Doe", person2);
people.set("Peter Jones", person3);

// Search for a person by name
const foundPerson: Person | undefined = hashSearch(people, "Jane Doe");

if (foundPerson) {
  console.log(`Found person: ${foundPerson.name}, age: ${foundPerson.age}`);
} else {
  console.log("Person not found");
}


// Define a Node class for B-Tree
class BTreeNode {
    keys: number[];
    children: BTreeNode[];
    constructor(keys: number[]) {
        this.keys = keys;
        this.children = [];
    }
}


// Define the B-Tree class
class BTree {
    root: BTreeNode | null;
    degree: number; // Minimum degree (defines the range for number of keys)

    constructor(degree: number) {
        this.root = null;
        this.degree = degree;
    }

    /**
     * Search for a key in the B-Tree.
     * @param key The key to search for.
     * @returns true if the key is found, false otherwise.
     */
    search(key: number): boolean {
        return this.searchRecursive(this.root, key);
    }

    // Recursive function to perform search
    private searchRecursive(node: BTreeNode | null, key: number): boolean {
        if (node === null) {
            return false;
        }

        // Find the first key greater than or equal to key
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        // If found, return true
        if (i < node.keys.length && key === node.keys[i]) {
            return true;
        }

        // Recursively search in the appropriate child
        return this.searchRecursive(node.children[i], key);
    }
}

// Example usage
const bTree = new BTree(3); // Create a B-Tree with minimum degree 3

// Insert keys into the B-Tree (not shown here, assumed already populated)

// Search for a key
const keyToSearch = 10;
const isFound = bTree.search(keyToSearch);
console.log(`Key ${keyToSearch} found in B-Tree: ${isFound}`);

