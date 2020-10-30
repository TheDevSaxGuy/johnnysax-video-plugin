
function add(a:number,b:number): number{
    return a+b
}
const suma = add(4,6);


function createAdder(a:number):(number)=>number{
    return function(b:number){
        return b+a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName:string, lastName:string = 'Enriquez'):string{
    return `${firstName} ${lastName}`;
}
const myName = fullName('Juan')