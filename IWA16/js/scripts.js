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
  const createHtml = (athlete) => {//The function takes an athlete ID as an argument and creates an HTML fragment with the athlete's information
    // Reassign the variables to make them easier to access
    const firstName = data.response.data[athlete].firstName;
    const surname = data.response.data[athlete].surname;
    const id = data.response.data[athlete].id;
    const races = (data.response.data[athlete].races).length
    // Get the latest race date and time for the athlete
    const date = new Date(data.response.data[athlete].races[races-1].date)
    const time = data.response.data[athlete].races[races-1].time;

    // Create a document fragment to hold the HTML
    const fragment = document.createDocumentFragment();

    // Create a title element with the athlete's ID and append it to the fragment
    let title = document.createElement('h2');
    title.textContent = id
    fragment.appendChild(title);

    // Create a list element to hold the athlete's information
    const list = document.createElement('dl');
     // Get the day, month, and year of the latest race date
    const day =  date.getDate()
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();
    console.log(month)

    // Calculate the total time for the latest race
    let sum = 0
    let i = 0;
    while ( i < time.length ) {
      sum += time[i]
      i++
    }
    const minutes = sum % 60;
    const hours = (sum - minutes) / 60;

    // Fill the list with the athlete's information
    list.innerHTML = /* html */ `
        <dt>Athlete: ${firstName +' '+ surname}</dt>
        <dt>Total Races: ${races}</dt>
        <dt>Event Date (Latest): ${day.toString().padStart(2, '0')+' '+ month +' '+ year}</dt>
        <dt>Total Time (Latest): ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dt>
      `;
      // Append the list to the fragment
    fragment.appendChild(list);
    return fragment;
  }
 // Get the elements with data-athlete attributes and append the HTML fragment with the athlete's information to each element
  document.querySelector('[data-athlete = "NM372"]').appendChild(createHtml('NM372'));
  document.querySelector('[data-athlete ="SV782"]').appendChild(createHtml('SV782'));