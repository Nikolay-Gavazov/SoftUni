function solution() {
  let result = "";
  return {
    append: (string) => (result += string),
    removeStart: (n) => (result = result.slice(n)),
    removeEnd: (n) => (result = result.slice(0, -n)),
    print: () => console.log(result),
  };
}
let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
