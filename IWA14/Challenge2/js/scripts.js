//Functions Declaration
const add = (a, b) =>  a + b //Function that takes and add two parameters 'a' and 'b' .
const multiply = (a, b) =>  a * b  //Function that takes and multiply two parameters 'a' and 'b' .

//'internal' function
function internal() {
	const added = this.add(this.internal.a, this.internal.b)//Add the values of 'a' and 'b' stored in 'internal' object using the 'add' function and assign it to 'added'.
    const multiple = this.multiply(added, this.internal.c) //Multiply 'added' and the value of 'c' stored in 'internal' object using the 'multiply' function and assign it to 'multiply'
	console.log(multiple)//change 'return this' to console.log so it print results of multiple
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()//Call the 'calculate' function of 'example1' object which should print the result of the calculation to the console
example2.calculate() //Call the 'calculate' function of 'example2' object which should print the result of the calculation to the console