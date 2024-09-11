//  método de arrays em Javascript: Filter
// cria uma nova array após todos os elementos serem filtrados, "depois de passarem no teste"

const numbers = [2, 6, 14, 7, 9, 11, 1];
const newArray = numbers.filter(maior);

function maior(value) {
  return value > 7; //teste
}

console.log("maiorQ7", newArray); // novo array

// método de arrays em Javascript: Map
// a função vai mapear, SEM modificar o array original, e vai retornar um novo array
const numbers1 =[2, 6, 14, 7, 9, 11, 1];

const numbersDouble = numbers1.map(double);

function double(element) {
  return element * 2; // retornar um novo array, nesse caso, o dobro dos números
}

console.log("dobro", numbersDouble); // array novo

// método de arrays em Javascript: Sort
// método usado para ordenação de arrays

const numbers2 = [2, 6, 14, 7, 9, 11, 1];

const sortednumbers = numbers2.sort(); // por default irá ser ordenada de maneira crescente, mas pode ser ordenada de outro jeito
numbers2.sort(function(a, b){return a - b}); // função criada pois ´sort´ por si só, ordena strings. para ordenar números uma função é necessária

console.log("sort", sortednumbers);

// método de arrays em Javascript: Reduce
// permite que você execute uma função de redução em cada elemento do array e no final retorna somente um único valor
const numbers3 = [2, 6, 14, 7, 9, 11, 1];

const total = numbers3.reduce(minhaReduce, 0); // zero sendo o acumulador inicial

function minhaReduce(accumulator, value) {
  // console.log(accumulator);
  return accumulator + value;
}

console.log("soma", total);

// método de arrays em Javascript: Spread
// permite que você expanda os valores de um array ou objeto em outro array ou objeto

const numbers4 = [1, 2, 3, 4];
const numbers5 = [5, 6, 7, 8];

const juncao = [...numbers4, ...numbers5 ]

console.log("junção", juncao);