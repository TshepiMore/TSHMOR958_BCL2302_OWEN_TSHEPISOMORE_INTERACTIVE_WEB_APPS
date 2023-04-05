//Declare variables to hold values
const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

//Check if hourOfDay and minuteOfDay are defined and if they are both zero
if (hourOfDay !== undefined && minuteOfDay !== undefined && hourOfDay == 0 && minuteOfDay == 0){
	
  //Convert the tax percentage to decimal
    const taxAsDecimal = parseFloat(tax)/ 100;

    //Calculate the starting salary after tax
  const startingAfterTax = salary * (1 - taxAsDecimal);

  //Calculate the balance after deducting expenses
   const balance = startingAfterTax - transport - food - rent;

   //Print the balance to the console, formatted as a currencry, used toFixed(2)so it can print cents to two decimal places.
console.log("R"+balance.toFixed(2));
}
