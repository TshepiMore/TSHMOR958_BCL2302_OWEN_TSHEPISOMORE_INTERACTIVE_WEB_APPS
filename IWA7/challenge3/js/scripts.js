//Define variables for Leo's and Sarah's names, surnames, and balances
const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

//Calculate the total owed amount by parsing the balance as intergers and adding them together.
const owed = parseInt(leoBalance) + parseInt(sarahBalance)

//Create a string for Leo's details with string interpolation and the correct format.
const leo = `${leoName} ${leoSurname} (Owed R${(parseInt(leoBalance)).toFixed(2)})\n`;

//Create a string for Sarah's details with string interpolation and correct format.
const sarah = `${sarahName} ${sarahSurname} (Owed R${(parseInt(sarahBalance)).toFixed(2)})\n`;

//Create a string for the total owed amount with the correct format.
const total = "Total amount owed: R "

//Combine the Leo, Sarah, divider, total and owed strings into the result string with appropriate line breaks
const result = `${leo}${sarah}${divider}\n${total}${owed.toFixed(2)}\n${divider}`;

//Output the result string to the console
console.log(result);