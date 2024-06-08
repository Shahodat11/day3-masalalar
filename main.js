var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Typscript");
// Encapsulation
// N1
var User = /** @class */ (function () {
    function User(name, eduName) {
        this.name = name;
        this.eduName = eduName;
    }
    return User;
}());
var user = new User("John", "Najot Ta'lim");
// console.log(user.eduName);
// N2
var Car = /** @class */ (function () {
    function Car(name, age) {
        this.name = name;
        this.age = age;
    }
    return Car;
}());
var car = new Car("BMW", 2024);
// console.log( car.age);
// N3
var Cars = /** @class */ (function () {
    function Cars(brend, price) {
        this.brend = brend;
        this.price = price;
    }
    return Cars;
}());
var cars = new Car("chevrolet", 14.500);
// console.log(cars.price);
// N4
var Language = /** @class */ (function () {
    function Language(language, soni) {
        this.language = language;
        this.soni = soni;
    }
    return Language;
}());
var language = new Language("UZB", 2);
// console.log(language.soni);
// N5
var Furukta = /** @class */ (function () {
    function Furukta(furukta) {
        this.name = furukta;
    }
    return Furukta;
}());
var furukta = new Furukta("ananas");
// console.log(furukta.price);
// Inheritence
// N1
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, eduName, groups) {
        var _this = _super.call(this, name, eduName) || this;
        _this.groups = groups;
        return _this;
    }
    return Student;
}(User));
var laylo = new Student("Laylo", "Najot Ta'lim", "N50");
// console.log(laylo);
// N2
var Zavot = /** @class */ (function (_super) {
    __extends(Zavot, _super);
    function Zavot(name, age, brend) {
        var _this = _super.call(this, name, age) || this;
        _this.brend = brend;
        return _this;
    }
    return Zavot;
}(Car));
var zavot = new Zavot("Malibu", 2023, "chevrolet");
// console.log(zavot);
// N3
var Firma = /** @class */ (function (_super) {
    __extends(Firma, _super);
    function Firma(brend, price, name) {
        var _this = _super.call(this, brend, price) || this;
        _this.name = name;
        return _this;
    }
    return Firma;
}(Cars));
var moshina = new Firma("BMW", 200000, "BMW m5");
// console.log(moshna);
// N4
var sozlar = /** @class */ (function (_super) {
    __extends(sozlar, _super);
    function sozlar(language, soni, sozlar) {
        var _this = _super.call(this, language, soni) || this;
        _this.sozlar = sozlar;
        return _this;
    }
    return sozlar;
}(Language));
var languages = new Language("uzb", 2);
// console.log(language);
// N5
var furukts = /** @class */ (function (_super) {
    __extends(furukts, _super);
    function furukts(name, price) {
        var _this = _super.call(this, name) || this;
        _this.price = price;
        return _this;
    }
    return furukts;
}(Furukta));
var furuktalar = new Furukta("olma");
console.log(furuktalar);
