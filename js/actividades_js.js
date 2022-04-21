// Actividad JS
// Mateo Herrera - A01751912
// Gerardo Gutiérrez - A01029422

//Ejercicio 1
//Función que encuentre el primer carácter de un cadena de texto 
//que no se repite. 
function noRepeat(str) {
    let result = "Todo se repite"
    let counter = 0
    let check = true
    for (const i of str) {
        for (const n of str) {
            if (i == n) {
                counter++
            }
        }
        if (counter == 1 && check) {
            result = i
            check = false
        }
        counter = 0
    }
    return result   
}

// Ejemplo 1
console.log("Pruebas ejercicio 1")
console.log("Ejemplo 1:")
// Prueba donde "e" es el unico caracter que no se repite
console.log(noRepeat("abacddbec"))
// Ejemplo 2
console.log("Ejemplo 2:")
// Prueba donde "z" no se repite y va primero que "e"
console.log(noRepeat("abzacddbec"))
// Ejemplo 3
console.log("Ejemplo 3:")
// Prueba donde todo se repite
console.log(noRepeat("abacddbc"))

//2.Escribe una función que implemente el algoritmo 'bubble-sort' 
// para ordenar una lista de números.
let temp = 0;
function bubbleS(d)
{
    for(let i = 0; i < d.length; i++)
        for(let j = 1; j < d.length-i; j++)
            if(d[j-1] > d[j])
            {
                // inter(d, j-1, j);
                temp = d[j-1];
                d[j-1] = d[j]; 
                d[j] = temp;
            }
    // console.log(d);
    return d;
}

console.log("Pruebas ejercicio 2")
// Ejemplo 1
console.log("Ejemplo 1:")
const ejbubble1 = []
ejbubble1.push(1,2,3,5,4);
console.log(ejbubble1);
console.log(bubbleS(ejbubble1));
// Ejemplo 2
console.log("Ejemplo 2:");
const ejbubble2 = [];
ejbubble2.push(6,8,9,7,10);
console.log(ejbubble2);
console.log(bubbleS(ejbubble2));
// Ejemplo 3
console.log("Ejemplo 3:");
const ejbubble3 = [];
ejbubble3.push(61,34,1,1000,101);
console.log(ejbubble3);
console.log(bubbleS(ejbubble3));

//Ejercicio 3
//Escribe una función que implemente el algoritmo 'quick-sort'
//para ordenar una lista de números.

function quicksort(lst){
    quicksortAux(lst, 0, lst.length-1)
}

function quicksortAux(lst, lo, hi) {
    if (lo>=hi) {
        return
    }
    orderedPos = partition(lst, lo, hi)
    quicksortAux(lst, lo, orderedPos-1)
    quicksortAux(lst, orderedPos+1, hi)
}

function partition(lst, lo, hi) {
    let p = lo
    let i = lo + 1
    let j = hi

    while (true) {
        while (lst[i]<=lst[p] && i < hi) {
            i++
        }
        while (lst[j]>lst[p] && j > lo) {
            j--
        }
        if (i < j) {
            switchPos(lst, i, j)
        } else {
            switchPos(lst, p, j)
            break
        }
    }
    return j
}

function switchPos(lst, pos1, pos2) {
    let x = lst[pos1]
    lst[pos1] = lst[pos2]
    lst[pos2] = x
}

console.log("Pruebas ejercicio 3")
// Ejemplo 1
// Prueba en desorden al azar
let example = [4,1,2,5,3]
quicksort(example)
console.log(example)
// Ejemplo 2
// Prueba al revez
let example2 = [6,5,4,3,2,1]
quicksort(example2)
console.log(example2)
// Ejemplo 3
// Prueba en orden
let example3 = [4,5,6,7]
quicksort(example3)
console.log(example3)

// 4. Escribe dos funciones: la primera que invierta un arreglo 
// de números y regrese un nuevo arreglo con el resultado; 
// la segunda que modifique el mismo arreglo que se pasa como 
// argumento. No se permite usar la función integrada 'reverse'.
function reversa1(s)
{
    const rev = [];
    for(let i = s.length-1; i >= 0; i--)
    {
        rev.push(s[i]);
    }
    console.log(rev);
}

console.log("Pruebas ejercicio 4")
// Ejemplo 1
console.log("Ejemplo rev1 1:");
let ejreversa1_1 = [1, 2, 3, 4, 5];
console.log(ejreversa1_1);
let salidareversa1_1 = reversa1(ejreversa1_1);
// Ejemplo 2
console.log("Ejemplo rev1 2:");
let ejreversa1_2 = [45, 60, 75, 90];
console.log(ejreversa1_2);
let salidareversa1_2 = reversa1(ejreversa1_2);
// Ejemplo 3
console.log("Ejemplo rev1 3:");
let ejreversa1_3 = [6, 7, 8, 9, 10];
console.log(ejreversa1_3);
let salidareversa1_3 = reversa1(ejreversa1_3);

function reversa2(s)
{
    let tempr1 = 0;
    let tempr2 = s.length-1;
    while(tempr1 < tempr2)
    {
        let tempr3 = s[tempr1];
        s[tempr1++] = s[tempr2];
        s[tempr2--] = tempr3;
    }
    console.log(s);
    // return s;
}

// Ejemplo 1
console.log("Ejemplo rev2 1:");
let ejreversa2_1 = [1, 2, 3, 4, 5];
console.log(ejreversa2_1);
let salidareversa2_1 = reversa2(ejreversa2_1);
// Ejemplo 2
console.log("Ejemplo rev2 2:");
let ejreversa2_2 = [45, 60, 75, 90];
console.log(ejreversa2_2);
let salidareversa2_2 = reversa1(ejreversa2_2);
// Ejemplo 3
console.log("Ejemplo rev2 3:");
let ejreversa2_3 = [6, 7, 8, 9, 10];
console.log(ejreversa2_3);
let salidareversa2_3 = reversa1(ejreversa2_3);

//Ejercicio 5
//Usando la definición de clase de Javascript ES6, crea una clase que se llame 'Vector' que represente un vector
//de 3 dimensiones. La clase debe de poder sumar y restar vectores, obtener su magnitud, obtener el vector unitario,
//y multiplicar por un escalar.

class Vector{
    constructor(x, y, z){
        this.x = x
        this.y = y
        this.z = z 
    }

    suma(vector2){
        let sumVector = new Vector(this.x + vector2.x, this.y + vector2.y, this.z + vector2.z)
        return sumVector
    }

    resta(vector2){
        let differenceVector = new Vector(this.x - vector2.x, this.y - vector2.y, this.z - vector2.z)
        return differenceVector
    }

    magnitud(){
        let magnitude = Math.sqrt(this.x**2 + this.y**2 + this.z**2)
        return magnitude
    }

    vectorUnitario(){
        let unitVector = new Vector(this.x/this.magnitud(), this.y/this.magnitud(), this.z/this.magnitud())
        return unitVector
    }

    escalar(scalar){
        let scalarVector = new Vector(this.x*scalar, this.y*scalar, this.z*scalar)
        return scalarVector
    }
}

let vector1 = new Vector(2, 6, 3)
let vector2 = new Vector(-8, -3, 10)
let vector3 = new Vector(2, -2, 1)

console.log("Pruebas ejercicio 5")
// Ejemplo 1
// Prueba suma
console.log(vector2.suma(vector3))
// Ejemplo 2
// Prueba resta
console.log(vector2.resta(vector3))
// Ejemplo 3
// Prueba magnitud
console.log(vector1.magnitud())
// Ejemplo 4
// Prueba vector unitario
console.log(vector3.vectorUnitario())
// Ejemplo 5
// Prueba vector escalar
console.log(vector1.escalar(2))

// 6. Escribe una función que calcule el máximo 
// común divisor de dos números.

function el_mcd(n1, n2)
{
    while(n1 != n2)
    {
        if(n1 > n2)
        {
            n1 -= n2;
        }
        else
        {
            n2 -= n1;
        }
    }

    return n1;
    // console.log(n1);
}

console.log("Pruebas ejercicio 6")
// Ejemplo 1
console.log("Ejemplo mcd 1:");
console.log("mcd de 21 y 3:");
console.log(el_mcd(21, 3));
// Ejemplo 2
console.log("Ejemplo mcd 2:");
console.log("mcd de 8 y 60");
console.log(el_mcd(8, 60));
// Ejemplo 3
console.log("Ejemplo mcd 3:");
console.log("mcd de 15 y 20");
console.log(el_mcd(15,20));

//Ejercicio 7
//Usando ojetos de tu clase 'Vector', crea una función que 
//reciba dos vectores, y que indique si esos vectores son ortogonales o no.

function ortogonal(vector1, vector2) {
    let pointProduct = vector1.x*vector2.x + vector1.y*vector2.y + vector1.z*vector2.z
    if (pointProduct === 0) {
        console.log("Los vectores son ortogonales")
    } else {
        console.log("Los vectores no son ortogonales")
    }
}

console.log("Pruebas ejercicio 7")
// Ejemplo 1
// Prueba vectores no ortogonales
ortogonal(vector1, vector2)
// Ejemplo 2
// Prueba vectores no ortogonales
ortogonal(vector1, vector3)
// Ejemplo 3
// Prueba vectores ortogonales
ortogonal(vector2, vector3)

// 8. Crea una función que cambie una cadena de 
// texto a 'Hacker Speak'. Por ejemplo, para la 
// cadena 'Javascript es divertido', su hacker 
// speak es: 'J4v45c1pt 35 d1v3rt1d0'.
function h4ck3r5p34k(p)
{
    let h = p;
    p = Array.from(h);
    let hs = "";
    // console.log(p)
    for(let i = 0; i < p.length; i++)
        if(p[i] == "a"|"A")
        {
            hs += "4";
        }
        else
        {
            if(p[i] == "b"|"B")
            {
                hs += "8";
            }
            else
            {
                if(p[i] == "e"|"E")
                {
                    hs += "3";
                }
                else
                {
                    if(p[i] == "i"|"I")
                    {
                        hs += "1";
                    }
                    else
                    {
                        if(p[i] == "o"|"O")
                        {
                            hs += "0";
                        }
                        else
                        {
                            if(p[i] == "s"|"S")
                            {
                                hs += "5";
                            }
                            else
                            {
                                if(p[i] == "t"|"T")
                                {
                                    hs += "7";
                                }
                                else
                                {
                                    hs += p[i];
                                }
                            }
                        }
                    }
                }
            }
        }

    // for(let j in p)
    // {

    // }
    return hs;
}

console.log("Pruebas ejercicio 8")
// Ejemplo 1
console.log("Ejemplo hacker speak 1:");
console.log("Javascript es divertido");
console.log(h4ck3r5p34k("Javascript es divertido"));
// Ejemplo 2
console.log("Ejemplo hacker speak 2:");
console.log("El codigo no corre");
console.log(h4ck3r5p34k("El codigo no corre"));
// Ejemplo 3
console.log("Ejemplo hacker speak 3:");
console.log("Que sueñes con los angelitos ");
console.log(h4ck3r5p34k("Que sueñes con los angelitos"));

//Ejercicio 9
//Escribe una función que reciba un número, y regrese una lista con todos sus factores.

function factorial(n) {
    let factores = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factores.push(i)
        }
    }
    return factores
}

console.log("Pruebas ejercicio 9")
// Ejemplo 1
// Prueba con numero 12
console.log(factorial(12))
// Ejemplo 2
// Prueba con numero 11
console.log(factorial(11))
// Ejemplo 3
// Prueba con numero 120
console.log(factorial(120))

//10. Escribe una función que quite los elementos 
// duplicados de un arreglo y regrese una lista 
// con los elementos que quedan. Por ejemplo: 
// quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
function noDups(k)
{
    let noDupsList = [];

    for(let i of k)
        if(noDupsList.indexOf(i) == -1)
        {
            noDupsList.push(i);
        }
    return noDupsList;
}

console.log("Pruebas ejercicio 10")
// Ejemplo 1
console.log("Ejemplo 1 arreglo sin duplicados:")
let ejSinDups1 = [1,2,1,2,3,4,5];
console.log(ejSinDups1);
console.log(noDups(ejSinDups1));
// Ejemplo 2
console.log("Ejemplo 2 arreglo sin duplicados:")
let ejSinDups2 = [44,4,5,55,6,6,4];
console.log(ejSinDups2);
console.log(noDups(ejSinDups2));
// Ejemplo 3
console.log("Ejemplo 3 arreglo sin duplicados:")
let ejSinDups3 = ["l","p","m","j","l","m"];
console.log(ejSinDups3);
console.log(noDups(ejSinDups3));