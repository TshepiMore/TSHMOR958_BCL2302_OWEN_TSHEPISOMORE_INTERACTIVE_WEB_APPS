import {company, year} from './configuration.js';
//import {year} from './configuration.js';


const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;

//The import statement had a typo error in the word from, it was form insted of from.
//Also in the import statement I signified company and year as variables by using {}.
//and also added console.log to log my message