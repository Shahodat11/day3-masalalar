console.log("Typscript")
// Encapsulation

// N1
class User {
    public name : string
    private eduName : string
    constructor(name:string, eduName:string){
        this.name = name
        this.eduName = eduName
    }
}
let user : User = new User("John", "Najot Ta'lim")
// console.log(user.eduName);

// N2
class Car {
    public name : string
    private age : number
    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
}
let car : Car = new Car ("BMW", 2024)
// console.log( car.age);

// N3
class Cars {
    public brend : string
    private price : number
    constructor(brend:string, price:number){
        this.brend = brend
        this.price = price
    }
}
let cars : Car = new Car ( "chevrolet", 14.500)
// console.log(cars.price);

// N4
class Language{
    public language : string
    private soni : number
    constructor(language : string, soni : number){
        this.language = language
        this.soni = soni
    }
}
let language : Language = new Language ( "UZB", 2)
// console.log(language.soni);

// N5
class Furukta {
    public name : string
    constructor(furukta : string){
        this.name = furukta
    }
}
let furukta : Furukta = new Furukta ( "ananas")
// console.log(furukta.price);

// Inheritence

// N1
class Student extends User {
    groups : string
    constructor(name: string, eduName : string, groups : string){
        super(name, eduName)
        this.groups = groups
    }
}
let laylo : Student = new Student("Laylo", "Najot Ta'lim", "N50")
// console.log(laylo);

// N2
class Zavot extends Car{
    brend : string
    constructor(name : string, age : number, brend : string){
        super(name, age)
        this.brend = brend
    }
}
let zavot : Zavot = new Zavot("Malibu", 2023, "chevrolet")
// console.log(zavot);

// N3
class Firma extends Cars{
    name : string
    constructor(brend : string, price : number, name : string){
        super(brend, price)
        this.name = name
    }
}
let moshina : Firma = new Firma ("BMW", 200000, "BMW m5")
// console.log(moshna);

// N4
class sozlar extends Language{
    sozlar : string
    constructor(language : string, soni : number, sozlar : string){
        super(language, soni)
        this.sozlar = sozlar
    }
}
let languages : Language = new Language("uzb", 2)
// console.log(language);

// N5
class furukts extends Furukta{
    private price : number
    constructor(name : string,price : number){
        super(name)
        this.price = price
    }
}
let furuktalar : Furukta = new Furukta ("olma")
console.log(furuktalar );