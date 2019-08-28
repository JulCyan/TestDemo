interface IPerson {
  name: string;
  age: number;
  props?: any;
}

let obj1: IPerson = {
  name: "Cyan",
  age: 20
};
let obj2: IPerson = {
  name: "Cyan",
  age: 20
};

let newSet: Set<IPerson> = new Set([obj1, obj2]);
