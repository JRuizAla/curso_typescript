//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

//strings
let color: string = "blue";
let sentence: string = `Hello, my name is jesus.`;

//arrays
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: Array<string> = ["one", "two", "three"];
let list4: Array<any> = [1, 2, 3];

//tuplas
let x: [string, number];
x = ["hello", 10];

//enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

//unknown
let notSure: unknown;
if (notSure === 4) { // ahora notSure es de tipo number
  sentence = notSure; //No nos deja asignar a un string un number
  decimal = notSure; // Aqui si nos deja por que se ha convertido a tipo number
}

//any
declare function getValue(key: string): any; //Recibe un string (key) y devuelve un valor del cual no se sabe el tipo puede ser cualquiera

//void
declare function getValue2(key: string): void; //Recibe un string (key) no devuelve ningun valor

//null & undefined
let u: undefined = undefined;
let n: null = null;

//never
function infiniteLoop(): never { //utilizado en funciones que nunca terminan o nunca devuelven nada
    while (true) {}
  }

//object
let name2: { first: string; last: string };

//aliases
type point = {
    x: number;
    y: number;
  };
let punto: point;
punto.x=10;
punto.y=20;

//interfaces
interface pointInterfaz {
    x: number;
    y: number;
  }
let puntointerfaz: pointInterfaz;
puntointerfaz.x=0;
puntointerfaz.y=0;

//Genericos
function identity<T>(arg: T): T { //recibe un arg de tipo T y devuelve otro arg de tipo T
    return arg;
  }

//clases
class pointClass {
    x: number;
    y: number;
  }
   
  const pt = new pointClass();
  pt.x = 0;
  pt.y = 1;
  