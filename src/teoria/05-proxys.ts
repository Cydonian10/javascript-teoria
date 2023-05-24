interface Target {
    message :string
    greet() : void
}

class RealTarget implements Target {
    message: string;

    constructor(message:string){
        this.message = message
    }

    greet(): void {
        console.log(this.message);
    }
}





const proxyHandler:ProxyHandler<RealTarget> = {

    get(target:RealTarget, prop: keyof RealTarget){
        console.log(`Accessing property : ${prop}`);
        return target[prop]
    },

    set(target: RealTarget, prop: keyof RealTarget, value: any) {
        console.log(`Setting property: ${prop} to ${value}`);
        if (Object.keys(target).includes("message")) {
          return true;
        }
        target[prop] = value;
        return true
    }
}

const realObjet = new RealTarget("hello world")

const proxyobject = new Proxy(realObjet, proxyHandler)

console.log("proxy => ",proxyobject);

proxyobject.greet();

proxyobject.message = "hola"

console.log(proxyobject.message);