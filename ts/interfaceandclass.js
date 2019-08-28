var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(_a) {
        var name = _a.name, age = _a.age, _b = _a.play, play = _b === void 0 ? "play" : _b, _c = _a.length, length = _c === void 0 ? 18 : _c;
        this.name = name;
        this.age = age;
        this.like = play;
        this.length = length;
    }
    Person.prototype.sayHi = function (name) {
        return "PersonI'm a " + name + " And I Like " + this.like + ", length is " + this.length;
    };
    Person.prop = function () {
        return "human";
    };
    Person.prototype.want = function () {
        return "sex";
    };
    Person.prototype.value = function (key) {
        return this[key];
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(_a) {
        var name = _a.name, age = _a.age, play = _a.play, length = _a.length, score = _a.score, eyes = _a.eyes;
        var _this = _super.call(this, { name: name, age: age, play: play, length: length }) || this;
        _this.score = score;
        _this.eyes = eyes;
        _this.test1 = "test1";
        return _this;
    }
    Student.prototype.sayHi = function () {
        return "Student " + this.test1 + " " + _super.prototype.value.call(this, "length") + " And I like " + _super.prototype.want.call(this) + ", too";
    };
    Student.prototype.study = function (subject) {
        if (subject.length) {
            console.log(subject.length);
        }
        else {
            console.log(2);
        }
        return "I like " + subject + " And my eyes is " + this.eyes;
    };
    return Student;
}(Person));
// let p1: Person = new Person({
//   name: "Cyan",
//   age: 20,
//   play: "girls",
//   length: 180
// });
// console.log(Person.prop());
// console.log(p1.age);
// console.log(p1.sayHi("shit"));
var s1 = new Student({
    name: "Cyan",
    age: 20,
    play: "girls",
    length: 180,
    score: 100,
    eyes: 300
});
console.log(s1.sayHi());
// console.log(s1.name);
// console.log(s1.value("length"));
// console.log(s1.study("1"));
var people1 = Object.assign({ hegiht: 180 }, new Person({
    name: "Cyan",
    age: 20,
    play: "girls",
    length: 190
}));
// console.log(people1.hegiht);
