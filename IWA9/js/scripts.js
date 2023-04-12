//Declare variables
const salary = 4000;
const lodging = 'apartment';//added semicolons
const size = 'large';


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    smallRoom: 200,
    largeRoom: 300,
    smallApartment: 400,//changed the properties writing them in camelCase
    largeApartment: 800,
    smallHouse: 1200,
    largeHouse: 2400,
}

// You can change below however you want

//calculating the tax multiply by salary
const taxAsDecimal = parseInt(tax['913']) / 100 * salary;//used parseInt to change string to a number.used [] to replace .notation
const startingAfterTax = salary * 1 - taxAsDecimal;
const type = lodging + size;
const balance = startingAfterTax - expenses.transport - expenses.food - rent.largeApartment;

console.log(balance.toFixed(2));