//Declared variables
const firstName = 'John';
const age = 35;
const myhobby = 'Coding';//Changed 'hobby' since it's a function to 'myhobby' to make it a different variable name.

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
}

function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${myhobby}!`)
}

hobby();