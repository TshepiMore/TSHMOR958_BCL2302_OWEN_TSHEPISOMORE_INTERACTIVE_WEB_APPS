//Declared variables
const firstName = 'John';
const age = 35;
const myhobby = 'Coding';//Changed 'hobby' since it is assigned as a function already to 'myhobby' to make it a different variable name.

const logTwice = (parameter) => { //added parameter to pass the message from 'hobby' function to the 'logTwice' fuction.
  console.log(parameter);
  console.log(parameter);
}

function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${myhobby}!`)
}

hobby();

//I think it was login in the message "hobby is not a fuction" because hobby was assigned as a variable.