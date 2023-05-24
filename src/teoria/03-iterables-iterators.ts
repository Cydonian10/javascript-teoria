import { Printer } from "../utils/Printer";

Printer.printerTitle("Iteradores")

const iterable = "aksdjf"

const iterador = iterable[Symbol.iterator]()

let next = iterador.next()
while (!next.done) {
    console.log(next.value)
    next = iterador.next()
}


