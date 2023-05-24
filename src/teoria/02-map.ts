/**
 * Almacenar conjunto de datos en forma objeto
 * Similar a los diccionarios
 */

import { Printer } from "../utils/Printer";

Printer.printerTitle("Maps")

let mapa = new Map<string,string | number>()

mapa.set("name","gabriel")
mapa.set("edad",12)

/**
 * Evaluar di existe la key
 */
console.log(mapa.has("horrible"));

/**
 * Imprimir el name
 */
console.log(mapa.get("name"));


mapa.set("correro","gabriel@hotmail")

console.log(mapa);

/**
 * Recorriendo Mapas
 */

for (const [key,value] of mapa) {
    console.log(` key: ${key} , valor: ${value}`);
}

console.log(mapa.keys());
console.log(mapa.values());