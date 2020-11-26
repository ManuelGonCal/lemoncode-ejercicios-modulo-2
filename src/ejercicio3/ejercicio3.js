function clone(source) {
    return Object.assign({}, source);
}

function clonev2(source) {
    const a = JSON.parse(JSON.stringify(source));
    return a;
}

function merge(target, source) {
    return Object.assign(source, target);
}

const original = {
    raza: 'oveja',
    nombre:'mery',
    propiedades: {
        pelaje: 'lanuda',
        color: 'blanco'
    } 
};

const a = {name: 'Maria', surname: 'ibanez', country: 'spa'};
const b = {name: 'Luisa', age: 31, married: true};

const ejercicio3 = isClone => {
    
    if (isClone) {
        let clon = clone(original);
        
        console.log('Dado el objeto:')
        console.log(original);
        console.log('creamos una variable llamada clon que será un clon creado a partir del objeto orginal, tendremos ahora 2 objetos iguales:');
        console.log(original, clon);
        console.log('Ahora cambiaremos algunas propiedas como el nombre y el pelaje de la oveja original, ahora por lo tanto tendremos 2 objetos diferentes. Uno modificado y otro clon del primer objeto previo a su modificacion');
        original.nombre = 'oveja original';
        original.propiedades.pelaje = 'esquilada';
        console.log(original,clon);
        console.log('Como podemos observar su nombre ha cambiado en el objeto modificado sin embargo su propiedad esquilada ha sido cambiada en ambos objetos. Ya que nuestra funcion no es capaz de clonar en profundidad.');
        console.log('Para resolver esto utilizamos otra funcion de clonado que si nos permita clonar en profundidad. Tenemos despues de usarla estos objetos:');
        let clonV2 = clonev2(original);
        console.log(original, clonV2);
        console.log("Pero si ahora modificamos las mismas propiedades en el objeto original veremos que ahora si se han clonado de manera profunda");
        original.nombre = 'Mery';
        original.propiedades.pelaje = 'Creciendo';
        console.log(original, clonV2);

    } else {
        console.log("Dados 2 objetos");
        console.log(a,b);
        console.log("Utilizamos la funcion merge y el resultado que obtenemos es el siguiente");
        console.log(merge(a,b));
        
    }
}

export default ejercicio3;