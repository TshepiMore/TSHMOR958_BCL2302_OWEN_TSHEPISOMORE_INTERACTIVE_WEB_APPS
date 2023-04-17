// Define an object that maps book statuses to their corresponding display properties
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
// Define objects for each book, with properties for the status, reserve, checkout, and checkin elements.
const book1 = {
    status : document.querySelector('#book1 .status'),
    reserve : document.querySelector('#book1 .reserve'),
    checkout : document.querySelector('#book1 .checkout'),
    checkin : document.querySelector('#book1 .checkin'),
}

const book2 = {
    status : document.querySelector('#book2 .status'),
    reserve : document.querySelector('#book2 .reserve'),
    checkout : document.querySelector('#book2 .checkout'),
    checkin : document.querySelector('#book2 .checkin'),
}

    const book3 = {
        status : document.querySelector('#book3 .status'),
        reserve : document.querySelector('#book3 .reserve'),
        checkout : document.querySelector('#book3 .checkout'),
        checkin : document.querySelector('#book3 .checkin'),
    }
    // Update the display for book1 based on its current status
book1.checkin.style.color = '';//changing color of checkin button to default color
book1.status.style.color = STATUS_MAP.overdue.color;//changing color of overdue based on its status

book1.reserve = STATUS_MAP.overdue.canReserve ? book1.reserve.enabled = true : book1.reserve.disabled = true;

book1.checkout = STATUS_MAP.overdue.canCheckout ? book1.checkout.enabled = true : book1.checkout.disabled = true;

book1.checkin = STATUS_MAP.overdue.canCheckIn ? book1.checkin.enabled = true : book1.checkin.disabled = true;


 // Update the display for book2 based on its current status
book2.checkin.style.color = '';
book2.status.style.color = STATUS_MAP.reserved.color;

book2.reserve = STATUS_MAP.reserved.canReserve ? book2.reserve.enabled = true : book2.reserve.disabled = true;

book2.checkout = STATUS_MAP.reserved.canCheckout ? book2.checkout.enabled = true : book2.checkout.disabled = true;

book2.checkin = STATUS_MAP.reserved.canCheckIn ? book2.checkin.enabled = true : book2.checkin.disabled = true;


 // Update the display for book3 based on its current status
book3.checkin.style.color = '';
book3.status.style.color = STATUS_MAP.shelf.color;

book3.reserve = STATUS_MAP.shelf.canReserve ? book3.reserve.enabled = true : book3.reserve.disabled = true;

book3.checkout = STATUS_MAP.shelf.canCheckout ? book3.checkout.enabled = true : book3.checkout.disabled = true;

book3.checkin = STATUS_MAP.shelf.canCheckIn ? book3.checkin.enabled = true : book3.checkin.disabled = true;


//FETCH, WORK ON IT , SEND IT BACK


//  checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color 
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled' 
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'