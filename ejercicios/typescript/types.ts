console.log('Hellp typescript')


const sum = add(2,3);

let muted:boolean = true;
muted = false;

let numerador : number = 42;
let denominador:number =6
let resultado = numerador/denominador;

let nombre: string = 'Juan';

//arrays
let people :string[] = [];
people = ['Isabel','nicole'];
people.push('1');

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('juan');
peopleAndNumbers.push(1);

//enum

enum Color{
    Rojo='Rojo',
    Verde='Verde',
    Azul='Azul'
}

let colorFavorito: Color = Color.Verde;
console.log(`color ${colorFavorito}`)

//any 
let comodin :any= 'Joker';
comodin = {type:'wildcard'};

//object

let someObject : object={type:'wildcard'};
