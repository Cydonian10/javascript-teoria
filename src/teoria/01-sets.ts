/**
 * Conjuntos valores unicos
 */

import { Printer } from "../utils/Printer"

Printer.printerTitle("Aprendiendo SETS")

const mySet = new Set([1,2,3,3,4,5,true,false])

console.log(mySet);
console.log(mySet.size)

mySet.add(28)
mySet.clear()

const myArray = Array.from(mySet)

for (const i of myArray) {
    console.log(i)
}

