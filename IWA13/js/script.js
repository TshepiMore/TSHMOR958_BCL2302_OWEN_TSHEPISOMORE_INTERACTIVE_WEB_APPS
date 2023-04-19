//Variable declarations
let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

//'logCalc' function
const  logCalc = () => { 
    const isString = typeof calculated === 'numerical-string';               // used === to check if 'calculated' is a string that can be parsed as a number
    const calculatedAsNumber = isString ? calculated : parseInt(calculated);// change parsenumber to pasrseInt to Convert 'calculated' to a number if it's a string, otherwise leave it as it is.
    calculated = calculatedAsNumber + 1                                     // Increment 'calculated' by 1
}
//'calcUser' function
const calcUser = () => {
  logCalc();             //added brackets and semicolon to call 'logCalc' function to increment 'calculated'
   if (calculated > 2) {// If 'calculated' is greater than 2, set 'user' to 'John' and 'state' to 'requesting'
    user = 'John';
  state = 'requesting';
  }
  if (calculated > 3){  // If 'calculated' is greater than 3, set 'state' to 'idle'
    state = 'idle'
  }
}
//checkUser function
 const checkUser = () => {
	if (user && state === 'requesting') { //condition that requires message to be printed if 'state' is equal to requesting.
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

//fucntion calls
checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()