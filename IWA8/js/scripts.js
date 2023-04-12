//Declare the variables for Leo's details.
const leoName = 'Leo ';
const leoSurname = 'Musvaire';
const leoNumber = '2';
const leoStreet = 'Church St.';
const leoPostal = '3105';
const leoBalance = '-10';

//Declare the variables for Sarah's details.
const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';
const sarahNumber = '13';
const sarahStreet = 'William Close';
const sarahPostal = '0310';

// Only change below this line
 
//Create an object for Leo's details
const leo = {
	name : leoName +""+leoSurname,//combine first and last name by using an empty string.
	balance : leoBalance,
	accessId : '47afb389-8014-4d0b-aff3-e40203d2107f',//
	age : 24,
	address: {
		number : leoNumber,
		street : leoStreet,
		postalcode : leoPostal,
	}
}

//Create an object for Sarah's details
const sarah = {
	name : sarahName + " " + sarahSurname,//Combine the first and last name by adding an empty string
	age : 62,
	accessId : '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance : sarahBalance,
	address : {
		number : sarahNumber,
		street : sarahStreet,
		postalcode : sarahPostal,
	}
	
}

//Log the objects to the console with the postal code property
console.log(leo, leo.address.postalcode);
console.log(sarah, sarah.address.postalcode);

//The code had several syntax errors and incorrect variable names.