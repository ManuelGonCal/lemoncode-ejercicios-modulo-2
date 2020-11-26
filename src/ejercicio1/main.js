const arrayTest = ['Illo','que dice', 'er tio', 'como', 'andas?'];

const head = ([first] = arr) =>  first;
const tail = ([first, ...rest]) =>  rest;
const init = arr => arr.slice(0, - 1);
const last = arr => arr.slice(-1);


console.log(head(arrayTest));
console.log(tail(arrayTest));
console.log(init(arrayTest));
console.log(last(arrayTest));