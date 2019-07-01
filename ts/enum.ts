enum ENV {
  dev = "development",
  pro = "production",
  test = "test"
}
console.log(ENV.dev === "development");

enum Num {
  dev,
  pro,
  test
}
console.log(Num[0] === 'dev'); 
