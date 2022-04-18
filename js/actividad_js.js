
//2.Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
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
    
    console.log(d);
}
// Ejemplo 1
// console.log("Ejemplo 1:")
// const ejbubble1 = [];
// ejbubble1.push(1,2,3,5,4);
// console.log(ejbubble1);
// console.log(bubbleS(ejbubble1));
// // Ejemplo 2
// console.log("Ejemplo 2:");
// const ejbubble2 = [];
// ejbubble2.push(6,8,9,7,10);
// console.log(ejbubble2);
// console.log(bubbleS(ejbubble2));
// // Ejemplo 3
// console.log("Ejemplo 3:");
// const ejbubble3 = [];
// ejbubble3.push(61,34,1,1000,101);
// console.log(ejbubble3);
// console.log(bubbleS(ejbubble3));

// 4. Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.

