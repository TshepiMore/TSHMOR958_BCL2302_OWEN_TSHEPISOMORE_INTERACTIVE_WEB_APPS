const date = 2050;
const status = 'parent';
let count = 0;//I changed CONST to LET so that I can be able to reassign my variable later.

if (date === 2050) {
	console.log("January", 'New Year’s Day');
	console.log("March", 'Human Rights Day');
	let month = 'April';
	console.log(month, 'Family Day');
	console.log(month, 'Freedom Day');
	count += 4;

	if (status === 'student') {
	  console.log('June', 'Youth Day');
		count += 1;
  }

	console.log('August', 'Women’s Day');;
	console.log('September', 'Heritage Day');
	month = 'December';
	console.log(month, 'Day of Reconciliation');
	count += 3;

	if (status === "parent") {
	  console.log('December', 'Christmas Day');
		count += 1;
  }

	console.log(month, 'Day of Goodwill');
	count += 1;
}

console.log('The status is:', status);
console.log('The year is:', date);
console.log('The total holiday is:', count);