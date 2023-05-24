import { Printer } from "../utils/Printer";

Printer.printerTitle("Generadores")

function cuadrado( value:number) {
    setTimeout(() => {
        console.log({value,resultado:value * value});
    },1000)

    return {
      value,
      resultado: value * value,
    };
}

function* generador() {
    console.log("inicia");
    yield cuadrado(0)
    yield cuadrado(1)
    yield cuadrado(2)
    console.log("finaliza");
}

let gen = generador()

for (const y of gen) {
    console.log(y);
}