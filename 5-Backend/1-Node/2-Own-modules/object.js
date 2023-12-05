let userOne = {
  id: 10001,
  name: "John",
  age: 23,
  isAdmin: true,
};

let userTwo = {
  id: 10002,
  name: "Jack",
  age: 20,
  isAdmin: false,
};

let userThree = {
  id: 10003,
  name: "Mary",
  age: 18,
  isAdmin: true,
};

let userFour = {
  id: 10004,
  name: "Robert",
  age: 21,
  isAdmin: false,
};

module.exports.userOne = userOne;
// module.exports = { userTwo: userTwo, userThree: userThree, userFour: userFour };
module.exports = { userTwo, userThree, userFour };
// console.log(module.exports);
