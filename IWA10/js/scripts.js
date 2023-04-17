//created an object 'holidays' that contains the names and dates of some South African public holidays
const currentYear = new Date().getFullYear()
const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date:( `16 December ${currentYear}`),
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}
//Assigns the int 6 to variable 'christmas'
const christmas = 6

//Assign the int 9 to the variable 'futureID'
const futureId = 9
// Do not change code above this comment

//Print the names of the holiday with the ID in the 'futureID' variable. If there is no holiday with that ID, it prints message to that effect.
//console.log(holidays[futureId] ? holidays[futureId].name :`ID ${futureId} not created yet` );
console.log(holidays[futureId]?.name || `ID ${futureId} not created yet`)
//Created a copy of the 'christmas' holiday object.
const copied = {
    id: holidays[christmas].id ,
    name: 'X-mas Day',
    date: new Date(`25 December ${currentYear}`),
}
//prints message if the copied date is earlier than the original holiday date.
const correctDate = copied.date;
    const isEarlier = correctDate < holidays[christmas].date;
    console.log('New date is earlier',  isEarlier);//outputs true if correctDate < holiday[christmas].date, then false if not.

    //if new date is earlier then it must print the new ID change,Name change and date change.
    if(isEarlier) {
    console.log('')//create an empty line in between
console.log('ID change:', holidays[christmas].id != copied.id)//it outputs false if the holiday christmas is != copied.id

console.log('')
console.log('Name change:', copied.name)

console.log('')
console.log('Date change:', (copied.date).toLocaleDateString('en-GB'))//formatting it as a string in the format of"DD/MM/YYYY".
console.log('')
    }

    //Calculates the earliest and latest holiday dates from the 'holidays' object, and prints them as formatted strings.
 const firstHolidayTimestamp = Math.min(
    holidays[1,2,3,4,5,6,7,8].date,
)
let firstDay = new Date (firstHolidayTimestamp);//converts the 'firstHolidayTimeStamp' var into a 'Date' object.
firstDay = firstDay.toLocaleDateString('en-GB');//formatting it as a string in the format of"DD/MM/YYYY".
console.log(firstDay);

const lastHolidayTimestamp = Math.max(
    parseInt(holidays[0].date),
    holidays[1,2,3,4,5,6,7,8].date,
)
let lastDay = new Date (lastHolidayTimestamp);//converts the 'lastHolidayTimestamp'  var into a 'Date' object.
lastDay = lastDay.toLocaleDateString('en-GB');//formatting it as a string in the format of"DD/MM/YYYY".
console.log(lastDay)

const randomHoliday = Math.floor(Math.random() * 8)//generates random int between 0 and 8 using Math.random and Math.floor.
console.log(holidays[randomHoliday].name)
