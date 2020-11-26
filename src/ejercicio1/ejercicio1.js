const arrayTest = [1,2,3,4,5];

const head = ([first] = arr) =>  first;
const tail = ([first, ...rest]) =>  rest;
const init = arr => arr.slice(0, - 1);
const last = arr => arr.slice(-1);

const ejercicio1 = () => {
    console.log(`El array dado es [${arrayTest}]`)
    console.log(`funcion head: ${head(arrayTest)}`);
    console.log(`funcion tail:`);
    console.log(tail(arrayTest));
    console.log(`funcion init:`);
    console.log(init(arrayTest));
    console.log(`funcion last: ${last(arrayTest)}`);
}

export default ejercicio1;
