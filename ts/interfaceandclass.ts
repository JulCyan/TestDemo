interface IPerson {
  readonly name: string;
  age: number;
  [propsName: string]: any;
}

interface IStudent extends IPerson {
  score: number;
}

// class implements interface
interface ImplementsStudent {
  study(subject: any): string;
  eyes: number;
}

// interface extends class
interface IPeople extends Person {
  hegiht: number;
}

type Name = string | number;

class Person {
  public name: string;
  public age: number;
  protected like: string;
  private length: number;
  public constructor({ name, age, play = "play", length = 18 }: IPerson) {
    this.name = name;
    this.age = age;
    this.like = play;
    this.length = length;
  }

  public sayHi(name: Name): string {
    return `PersonI'm a ${name} And I Like ${this.like}, length is ${
      this.length
    }`;
  }

  static prop(): string {
    return "human";
  }

  protected want(): string {
    return `sex`;
  }

  public value(key: string) {
    return this[key];
  }
}

class Student extends Person implements ImplementsStudent {
  public score: number;
  public eyes;
  public constructor({ name, age, play, length, score, eyes }: IStudent) {
    super({ name, age, play, length });
    this.score = score;
    this.eyes = eyes;
  }

  public sayHi() {
    return `Student ${super.value("length")} And I like ${super.want()}, too`;
  }

  public study(subject: string | number) {
    if ((<string>subject).length) {
      console.log((<string>subject).length);
    } else {
      console.log(2);
    }
    return `I like ${subject} And my eyes is ${this.eyes}`;
  }
}

// let p1: Person = new Person({
//   name: "Cyan",
//   age: 20,
//   play: "girls",
//   length: 180
// });
// console.log(Person.prop());
// console.log(p1.age);
// console.log(p1.sayHi("shit"));

const s1: Student = new Student({
  name: "Cyan",
  age: 20,
  play: "girls",
  length: 180,
  score: 100,
  eyes: 300
});
// console.log(s1.sayHi());
console.log(s1.name);
// console.log(s1.value("length"));
// console.log(s1.study("1"));

const people1: IPeople = (<any>Object).assign(
  { hegiht: 180 },
  new Person({
    name: "Cyan",
    age: 20,
    play: "girls",
    length: 190
  })
);
// console.log(people1.hegiht);


