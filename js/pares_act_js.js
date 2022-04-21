// Actividad JS
// Mateo Herrera
// Gerardo Gutiérrez


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
// // Ejemplo 1
// console.log("Ejemplo 1:");
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
// // Ejemplo 1
// console.log("Ejemplo rev1 1:");
// let ejreversa1_1 = [1, 2, 3, 4, 5];
// console.log(ejreversa1_1);
// let salidareversa1_1 = reversa1(ejreversa1_1);
// // Ejemplo 2
// console.log("Ejemplo rev1 2:");
// let ejreversa1_2 = [45, 60, 75, 90];
// console.log(ejreversa1_2);
// let salidareversa1_2 = reversa1(ejreversa1_2);
// // Ejemplo 3
// console.log("Ejemplo rev1 3:");
// let ejreversa1_3 = [6, 7, 8, 9, 10];
// console.log(ejreversa1_3);
// let salidareversa1_3 = reversa1(ejreversa1_3);
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
// // Ejemplo 1
// console.log("Ejemplo rev2 1:");
// let ejreversa2_1 = [1, 2, 3, 4, 5];
// console.log(ejreversa2_1);
// let salidareversa2_1 = reversa2(ejreversa2_1);
// // Ejemplo 2
// console.log("Ejemplo rev2 2:");
// let ejreversa2_2 = [45, 60, 75, 90];
// console.log(ejreversa2_2);
// let salidareversa2_2 = reversa1(ejreversa2_2);
// // Ejemplo 3
// console.log("Ejemplo rev2 3:");
// let ejreversa2_3 = [6, 7, 8, 9, 10];
// console.log(ejreversa2_3);
// let salidareversa2_3 = reversa1(ejreversa2_3);

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
// // Ejemplo 1
// console.log("Ejemplo mcd 1:");
// console.log("mcd de 21 y 3:");
// console.log(el_mcd(21, 3));
// // Ejemplo 2
// console.log("Ejemplo mcd 2:");
// console.log("mcd de 8 y 60");
// console.log(el_mcd(8, 60));
// // Ejemplo 3
// console.log("Ejemplo mcd 3:");
// console.log("mcd de 15 y 20");
// console.log(el_mcd(15,20));


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
// // Ejemplo 1
// console.log("Ejemplo hacker speak 1:");
// console.log("Javascript es divertido");
// console.log(h4ck3r5p34k("Javascript es divertido"));
// // Ejemplo 2
// console.log("Ejemplo hacker speak 2:");
// console.log("El codigo no corre");
// console.log(h4ck3r5p34k("El codigo no corre"));
// // Ejemplo 3
// console.log("Ejemplo hacker speak 3:");
// console.log("Que sueñes con los angelitos ");
// console.log(h4ck3r5p34k("Que sueñes con los angelitos"));


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

// // Ejemplo 1
// console.log("Ejemplo 1 arreglo sin duplicados:")
// let ejSinDups1 = [1,2,1,2,3,4,5];
// console.log(ejSinDups1);
// console.log(noDups(ejSinDups1));
// // Ejemplo 2
// console.log("Ejemplo 2 arreglo sin duplicados:")
// let ejSinDups2 = [44,4,5,55,6,6,4];
// console.log(ejSinDups2);
// console.log(noDups(ejSinDups2));
// // Ejemplo 3
// console.log("Ejemplo 3 arreglo sin duplicados:")
// let ejSinDups3 = ["l","p","m","j","l","m"];
// console.log(ejSinDups3);
// console.log(noDups(ejSinDups3));
