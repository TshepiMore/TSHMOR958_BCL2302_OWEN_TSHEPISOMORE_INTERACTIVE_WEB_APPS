const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';

let shipping = null;
let currency = 'R';

const location = 'RSA';
let customers = 1;

if (location === 'RSA') {
    shipping = 400;
    currency = 'R' }

else if (location === 'NAM'){
let shipping = 600;
}
else if (location === 'NK'){
    console.log(BANNED_WARNING);
}
else {
    shipping = 800;
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * 'NONE_SELECTED';
const batteries = 35 * 2;
const pens = 5 * 'NONE_SELECTED' ;

const subtotal = shoes + toys + shirts + batteries + pens;

if (subtotal >= 1000 && (location ==='RSA' || location === 'NAM') && customers === 1){
shipping = 0;
}
else if (shipping !== null && customers !== 1){
    console.log(FREE_WARNING);
}

console.log('Price', currency, subtotal + shipping);