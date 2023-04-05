// Declare variables for primary and secondarycphone number
const primaryPhone = '0748105141'
const secondaryPhone = 'O219131568'

// Only change below this line

//Check if primaryPhone is a valid numerical string
const primaryValid = typeof number == (primaryPhone);

//Check if secondaryPhone is not valid numerical string
const secondaryValid = typeof number !== (secondaryPhone);

//Print the results of the validity checks for the phone numbers
console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);

//other method being used to get results
//const primaryPhone = /^\d+$/.test(primaryPhone);
//const primaryPhone = /^\d+$/.test(secondaryPhone);
// '/^\d+$' is a regular expression that matches a string that contains only one or more digits, from start to end.
//'test()' method is used to execute a regular expression against a string.true if expression matches the string and false otherwise.