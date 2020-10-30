enum Color{
    Red= 'Rojo',
    Green='verde'
}

interface Rectangulo{
    ancho:number,
    alto:number,
    color?: Color,
}

let rect:Rectangulo ={
    ancho:4,
    alto:6,
    
}

function area(r:Rectangulo):number{
    return r.alto * r.ancho
}
const areaRect = area(rect);
console.log(areaRect);

rect.toString = function (){
    return this.color?`Un rectangulo ${this.color}`:'Un rectangulo'
}
console.log(rect.toString())