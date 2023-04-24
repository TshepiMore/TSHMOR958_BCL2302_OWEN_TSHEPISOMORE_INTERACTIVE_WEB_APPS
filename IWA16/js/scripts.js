// Define the array of month names.
const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
 
  // Define the data object.
 const data = {
      response: {
        requestType: "FETCH_ATHLETE_DATA",
       requestBy: "ALL_MATCHING_ATHLETES",
       forDisplay: "BEST_RACES",
 
      data: {
         // Define the data for the first athlete.
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
 
        // Define the data for the second athlete
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };

  //Only edit below this comment
  //nwabisa//
  // Define variables for the first athlete
let Athlete  = data.response.data.NM372.firstName +' '+ data.response.data.NM372.surname
let races = Object.keys(data.response.data.NM372.races).length
let day = new Date(data.response.data.NM372.races[1].date).getDate() +' '+ MONTHS[11] +' '+ new Date(data.response.data.NM372.races[1].date).getFullYear()
console.log(day)
let timeAsArray = data.response.data.NM372.races[1].time[0] + data.response.data.NM372.races[1].time[1] + data.response.data.NM372.races[1].time[2] + data.response.data.NM372.races[1].time[3]
timeAsArray = '00:'+ timeAsArray

// schalk//
// Define variables for the second athlete
const athleteSchalk = data.response.data.SV782.firstName +' '+ data.response.data.SV782.surname
let racesSchalk = Object.keys(data.response.data.SV782.races).length
let daySchalk = new Date(data.response.data.SV782.races.at(-1).date).getDate() +' '+ MONTHS[11] +' '+ new Date(data.response.data.NM372.races.at(-1).date).getFullYear()
let timeAsArraySchalk = data.response.data.SV782.races[1].time[0] + data.response.data.SV782.races[1].time[1] + data.response.data.SV782.races[1].time[2] + data.response.data.SV782.races[1].time[3]
timeAsArraySchalk = '00:'+ timeAsArraySchalk

//OUTPUT//

const element = document.querySelector("body");// Select the <body> element.
const fragment = document.createDocumentFragment('dl');// Create a new document fragment with the <dl> tag
// Create an array of two athletes, each with their own race data
const athlete = [
  [ 'Athlete:' +' '+ Athlete,"Total Races: "+ races, 'Event Date : ' + day, 'Total Time: ' + timeAsArray],
  [ 'Athlete:' +' '+ athleteSchalk,"Total Races: "+ racesSchalk, 'Event Date : ' + daySchalk, 'Total Time: ' + timeAsArraySchalk],
]
// Separate the two athletes into their own variables for easier reference
let nwabisa = athlete[0]
let schalk = athlete[1]
// Loop through the array of athletes and their race data
for (let i = 0; i < 3; i = i + 1){
  if (i < 1){ // For the first athlete (nwabisa)
    let title = document.createElement("h2");// Create a new <h2> element with the athlete's ID as text content
    title.textContent = data.response.data.NM372.id;
    const dl = document.querySelector('body');// Select the <body> element again
    dl.appendChild(title); // Append the <h2> element to the <body> element
// Loop through the athlete's race data and create new <dd> elements with the data as text content
    nwabisa.forEach((athletes) => {
      const details = document.createElement("dd");
      details.textContent = athletes;
      fragment.appendChild(details);
       });
       element.appendChild(fragment);// Append the entire fragment (with all <dd> elements) to the <body> element
    } else if ( i > 1 ){
       let titleSchalk = document.createElement("h2");// Create a new <h2> element with the athlete's ID as text content
      titleSchalk.textContent = data.response.data.SV782.id;
      const dd = document.querySelector('body');// Select the <body> element again
      dd.appendChild(titleSchalk); // Append the <h2> element to the <body> element

      schalk.forEach((athletes) => {
      const details = document.createElement("dd");// Loop through the athlete's race data and create new <dd> elements with the data as text content
      schalk.forEach((athletes) => {
      details.textContent = athletes;
      fragment.appendChild(details);
       });
       element.appendChild(fragment);// Append the entire fragment (with all <dd> elements) to the <body> element
    }
}