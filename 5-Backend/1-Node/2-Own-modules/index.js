// const varName = require("./path")
const exportedFunction = require("./function.js");
const exportedArray = require("./array.js");
const exportedObject = require("./object.js");
const exportedVariable = require("./variables.js");
const { userTwo, userThree, userFour } = require("./object.js");
/*
    const { userTwo, userThree, userFour } = {
                    userTwo: { id: 10002, name: 'Jack', age: 20, isAdmin: false },
                    userThree: { id: 10003, name: 'Mary', age: 18, isAdmin: true },
                    userFour: { id: 10004, name: 'Robert', age: 21, isAdmin: false }
                }

    const user = { id: 1, name: Jack}
    const {id, name} = user
*/

// console.log(exportedFunction);

// exportedFunction.displayFunction("John");
// console.log(exportedArray.fruits);
// console.log(exportedObject.userOne);
// console.log(exportedVariable.city);

// console.log(userTwo);
// console.log(userThree);
// console.log(userFour);
const usersArray = [userTwo, userThree, userFour];
const nameStartsWithM = usersArray.find((user) => user.name.includes("M"));
console.log(nameStartsWithM);
