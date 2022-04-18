console.log("Hello JS!")

function f(g)
{
    let x = g * 5
    return x
}

// clases
class point2d
{
    constructor(x, y)
    {
        this.x = x
        this.y = y 
    }

    print()
    {
        console.log(this.x, "-", this.y)
    }
}

let point1 = new point2d(3, 4)
point1.print()

let var1 = 1
const var2 = 0.5
// no usar este tipo de declaración de variables. el usar esto, es hoisting, convierte a las variables en global y puede arruinar otras varibales ya declaradas.
// var var3 = 0
let var3 = 'String'

console.log(var1 + 5)
console.log(var2 * 2.5)
console.log(var3 + 'adadasd')

console.log(f(6))

// funciona más como un arreglo
let var4 = [3, 4, 2, 1]
let var5 = []

var5.push(4)
var5.push(4, 5, 6, 7)

console.log(var5)

// ciclo for
for(let i = 0; i<var5.length; i++)
    console.log(var5[i], var5[i] % 2)

for(let n of var5)
    console.log(n-1)

var5.forEach(value=>console.log(value*5))

// ciclo while
let contador = 0
while(contador < 10)
{
    console.log(contador)
    contador+=1
}

// if
if(false)
    console.log("True!")
else if(false)
    console.log("False!")
else
    console.log("ADADS")

if(contador === "10")
    console.log("QWEQWE")
else
    console.log("ZXCZXC")

let var6 = {
    a: "1",
    b: 2,
    c: 4.5
}

// console.log