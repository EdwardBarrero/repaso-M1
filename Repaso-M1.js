const { Queue, Node, LinkedList, BinarySearchTree } = require("./DS.js");

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function (array, total = 0) {
    // Tu código aca:

    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) { total = total + countArray(array[i]) }
        else { total = total + array[i] }
    }
    console.log(total)
    return total;
};

// --------------------------------------------------------------------------------------------------------------------

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
var obj = {
    a: {
        a1: 10,
        a2: "Franco",
        a3: { f: "r", a: "n", c: { o: true } },
    },
    b: 2,
    c: [1, { a: 1 }, "Franco"],
};
var obj1 = {
    a: 1,
    b: 2,
};
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (obj) {
    // Tu código aca:
    var suma = 0;
    for (prop in obj) {
        if (typeof obj[prop] == "object" && !Array.isArray(obj[prop])) {
            suma++;
            suma += countProps(obj[prop])
        }
        else { suma++ }
    }
    return suma;
};

// --------------------------------------------------------------------------------------------------------------------

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
    // Tu código aca:

};

// var listOne = new LinkedList();
// listOne.add(1);
// listOne.add("2");
// listOne.add(false);
// listOne.add("Franco");
// console.log(
//     "listOne: ",
//     listOne.head.value +
//     " " +
//     listOne.head.next.value +
//     " " +
//     listOne.head.next.next.value +
//     " " +
//     listOne.head.next.next.next.value
// );
// console.log("changeNotNumbers: ", listOne.changeNotNumbers());
// console.log(
//     "listOne: ",
//     listOne.head.value +
//     " " +
//     listOne.head.next.value +
//     " " +
//     listOne.head.next.next.value +
//     " " +
//     listOne.head.next.next.next.value
// );

// var listTwo = new LinkedList();
// listTwo.add("Franco");
// listTwo.add("2a");
// listTwo.add(null);
// listTwo.add({ a: 1 });
// console.log(
//     "listTwo: ",
//     listTwo.head.value +
//     " " +
//     listTwo.head.next.value +
//     " " +
//     listTwo.head.next.next.value +
//     " " +
//     listTwo.head.next.next.next.value
// );
// console.log("changeNotNumbers: ", listTwo.changeNotNumbers());
// console.log(
//     "listTwo: ",
//     listTwo.head.value +
//     " " +
//     listTwo.head.next.value +
//     " " +
//     listTwo.head.next.next.value +
//     " " +
//     listTwo.head.next.next.next.value
// );

// --------------------------------------------------------------------------------------------------------------------

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
var queueOne = [7, 3, 5]
var queueTwo = [2, 4, 6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function (queueOne, queueTwo) {
    // Tu código aca:
    var q1Index = 0;
    var q2Index = 0;
    var merge = []
    while (q1Index < Object.values(queueOne)[0].length && q2Index < Object.values(queueTwo)[0].length) {
        merge.push(Object.values(queueOne)[0][q1Index]);
        merge.push(Object.values(queueTwo)[0][q2Index]);
        q1Index++;
        q2Index++;
    }
    return merge.concat(Object.values(queueOne)[0].slice(q1Index)).concat(Object.values(queueTwo)[0].slice(q2Index));
};


var queueOne = new Queue();
queueOne.enqueue(1);
queueOne.enqueue(3);
queueOne.enqueue(5);
queueOne.enqueue(7);
queueOne.enqueue(9);
var queueTwo = new Queue();
queueTwo.enqueue(2);
queueTwo.enqueue(4);
queueTwo.enqueue(6);
console.log("mergeQueues: ", mergeQueues(queueOne, queueTwo));

// --------------------------------------------------------------------------------------------------------------------

// Implementar la funcion closurMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
    // Tu código aca:
    return function Multiplicar(num) {
        var result = num * multiplier;
        return result;
    }
};

var multByFour = closureMult(4);
console.log("multByFour: ", multByFour(2));
console.log("multByFour: ", multByFour(5));
var multBySix = closureMult(6);
console.log("multBySix: ", multBySix(4));

// --------------------------------------------------------------------------------------------------------------------

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol

BinarySearchTree.prototype.sum = function () {
    // Tu código aca:
    var suma = 0;
    suma = suma + this.value
    if (this.left) { suma += BinarySearchTree.sum(this.left) }
    if (this.right) { suma += BinarySearchTree.sum(this.right) }
    return suma;
};

var bst = new BinarySearchTree(15);
bst.insert(10);
bst.insert(17);
bst.insert(5);
bst.insert(7);
bst.insert(3);
bst.insert(25);
console.log("sum: ", bst.sum());

// functionTwo()[(suma = 2)];
// functionOne()[(suma = 9)];


// --------------------------------------------------------------------------------------------------------------------
//Implementar el metodo 'toArray' en el prototype del BinarySearchTree
//que devuelva los valores del arbol en un array ordenado
//Ejemplo:
//	   32
//    /  \
//   8   64
//  / \
// 5   9
// resultado: [5,8,9,32,64] */
BinarySearchTree.prototype.toArray = function () {
    // Tu código acá
    var array = []
    if (this.left) { array = array.concat(this.left.toArray()) };
    array.push(this.value);
    if (this.right) { array = array.concat(this.right.toArray()) };
    return array;
};

var bst = new BinarySearchTree(32);
bst.insert(8);
bst.insert(9);
bst.insert(5);
bst.insert(64);
console.log('toArray: ', bst.toArray())
// --------------------------------------------------------------------------------------------------------------------

// Ordenar un array de objetos segun DNI de mayor a menor (descendente).
// Ejemplo:
objetoPersonas = [
    {
        dni: 40607080,
        nombre: 'Carlitos',
        apellido: 'Fulano',
        edad: 22,
        email: 'carlosfulano123@gmail.com',
        username: 'xXElCrackXx',
    },
    {
        dni: 23242526,
        nombre: 'Maria',
        apellido: 'Gonzalez',
        edad: 48,
        email: 'mary.gon@hotmail.com',
        username: 'marymary321',
    },
    {
        dni: 90919293,
        nombre: 'Bartolomeo',
        apellido: 'Simpson',
        edad: 10,
        email: 'bartsimpson@gmail.com',
        username: 'elBarto',
    },
    {
        dni: 76757473,
        nombre: 'Doge',
        apellido: 'De Hoz',
        edad: 5,
        email: 'soyelperrofavorito@yahoo.com.ar',
        username: 'dogeOfficial',
    },
];

// Resultado: [
//     {
//         dni: 90919293,
//         nombre: 'Bartolomeo',
//         apellido: 'Simpson',
//         edad: 10,
//         email: 'bartsimpson@gmail.com',
//         username: 'elBarto',
//     },
//     {
//         dni: 76757473,
//         nombre: 'Doge',
//         apellido: 'De Hoz',
//         edad: 5,
//         email: 'soyelperrofavorito@yahoo.com.ar',
//         username: 'dogeOfficial',
//     },
//     {
//         dni: 40607080,
//         nombre: 'Carlitos',
//         apellido: 'Fulano',
//         edad: 22,
//         email: 'carlosfulano123@gmail.com',
//         username: 'xXElCrackXx',
//     },
//     {
//         dni: 23242526,
//         nombre: 'Maria',
//         apellido: 'Gonzalez',
//         edad: 48,
//         email: 'mary.gon@hotmail.com',
//         username: 'marymary321',
//     },
// ];

function sortByDni(obj) {
    if (obj.length <= 1) return obj;

    var pivot = obj[0];
    var minor = [];
    var major = [];
    for (var i = 1; i < obj.length; i++) {
        if (pivot["dni"] < obj[i]["dni"]) { major.push(obj[i]) }
        else { minor.push(obj[i]) }
    }

    return sortByDni(major).concat(pivot).concat(sortByDni(minor));
}

// --------------------------------------------------------------------------------------------------------------------

// Dado un ID de un curso y un objeto que contiene estudiantes,
// encontrar cuántos estudiantes están inscriptos en dicho curso.
// Utilizar recursión para iterar.
// Recordá modificar los parámetros que recibe la función si es necesario.

// El objeto de estudiantes es como el siguiente:

var estudiantes = {
    3320943: {
        nombre: 'Persona',
        apellido: 'Apellido',
        mail: 'mail@mail.com',
        cursos: {
            1: 'Cocina',
            2: 'Mecánica'
        }
    },
    90234: {
        nombre: 'Persona',
        apellido: 'Apellido',
        mail: 'mail@mail.com',
        cursos: {
            2: 'Mecánica'
        }
    },
    929340: {
        nombre: 'Persona',
        apellido: 'Apellido',
        mail: 'mail@mail.com',
        cursos: {
            2: 'Mecánica'
        }
    },
    123123: {
        nombre: 'Persona',
        apellido: 'Apellido',
        mail: 'mail@mail.com',
        cursos: {
            1: 'Cocina',
        }
    }
}

function recorrerAlumno(idCurso, objeto) {
    //Tu codigo aca:
    var suma = 0;
    //    if (idCurso == 1) { idCurso = "Cocina" }
    //    else if (idCurso == 2) { idCurso = "Mecánica" }
    for (prop in objeto) {
        if (objeto.hasOwnProperty(idCurso)) {
            suma++;
            return suma;
        }
        if (typeof objeto[prop] == "object") {
            suma += recorrerAlumno(idCurso, objeto[prop]);
        }
    }
    return suma;
}


// --------------------------------------------------------------------------------------------------------------------

// Escriba una funcion "orderCities" que reciba un "num" de cities y que devuelva
// las cities que mas se repiten, en orden decreciente 
// deberia devolver: 
// [ 'nashville', 'madrid', 'barcelona', 'los angeles', 'london' ]
const citiesList = [
    "nashville",
    "nashville",
    "los angeles",
    "nashville",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "madrid",
    "canary islands",
    "barcelona",
    "madrid",
    "nashville",
    "barcelona",
    "london",
    "berlin",
    "madrid",
    "nashville",
    "london",
    "madrid",
]
function orderCities(num) {
    //Tu codigo aca:
    var arrayOrder = [];
    var nuevaCity = new createCities(num[0]);
    arrayOrder.push(nuevaCity);
    for (var i = 1; i < num.length; i++) {
        if (verificar(num[i], arrayOrder)) {
            for (var j = 0; j < arrayOrder.length; j++) {
                if (num[i] == arrayOrder[j]["city"]) { arrayOrder[j]["value"] = arrayOrder[j]["value"] + 1; }
            }
        }
        else { var nuevaCity = new createCities(num[i]); arrayOrder.push(nuevaCity); }
    }
    arrayOrder = bubbleSort(arrayOrder);
    for(var i = 0; i< arrayOrder.length; i++){
        arrayOrder[i] = arrayOrder[i]["city"];
    }
    return arrayOrder;
}

function createCities(city) {
    this.city = city;
    this.value = 1;
}

function verificar(city, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i]["city"] == city) return true;
        else return false;
    }
}

function bubbleSort(array) {
    for (var i = 0; i < array.length; i++) {
        var k = 1;
        array[k]["value"]
        var temp = 0;
        var j = 0;
        while (j < array.length && k < array.length) {
            if (array[k]["value"] > array[j]["value"]) { temp = array[j]; array[j] = array[k]; array[k] = temp; };
            k++;
            j++;
        }
        if (temp == 0) return array;
    }
}