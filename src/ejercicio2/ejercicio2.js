const arrayTest = ['Illo','que dice', 'er tio', 'como', 'andas?'];
const arrayTest2 = ['Loco','pos yo bien', 'tu que, guay?', 'La pari bien?'];
const arrayTest3 = ['Si', 'todo bien', 'mañana quedamos', 'me voy'];


const concat = (arr1, arr2) => [...arr1, ...arr2];
function concatv2() { return Array.prototype.concat(...arguments) };

const ejercicio2 = () => {
    console.log("dados los arrays:")
    console.log(arrayTest);
    console.log(arrayTest2);
    console.log("el resultado de la primera funcion concat es:");
    console.log(concat(arrayTest,arrayTest2));
    console.log("para la segunda parte del ejercicio añadimos un nuevo array");
    console.log(arrayTest3);
    console.log("y llamamos a la nueva funcion concat con diferentes argumentos");
    console.log("3 argumentos");
    console.log(concatv2(arrayTest2,arrayTest3,arrayTest));
    console.log("2 argumentos");
    console.log(concatv2(arrayTest2,arrayTest));
    console.log("1 argumento");
    console.log(concatv2(arrayTest));

}

export default ejercicio2