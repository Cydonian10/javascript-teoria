export class Printer {

    static printerTitle(word:string) :void {
        console.log("*".repeat(word.length))
        console.log(word)
        console.log("*".repeat(word.length))
    }

}