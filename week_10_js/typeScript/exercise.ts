function formatFullName(first:string, last:string) :string{
    return first + " " + last
}
console.log(formatFullName("david","spiller"))

console.log(formatFullName(34,"spiller"))

interface Product {
    id:number,
    name:string,
    price: number,
    instock?: boolean,

}

function printProduct(p:Product) : void{
    console.log(p.id,p.name,p.price,p.instock)
}

const p:Product = {
    id:1,
    name:"david",
    price: 50,
    instock: true // אופציונאלי 
    }
printProduct(p)


type Direction = 'left'|'right'|'up'|'down'

function move(dir: Direction, steps: number) :string {
    return `direction is ${dir} and the steps is ${steps}`
}
console.log(move('left',10))
console.log(move('diagonal',20))


