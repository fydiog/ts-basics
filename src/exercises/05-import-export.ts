import { Product, taxCalc } from '../exercises/04-destructuring';
//typescript basics

const shoppingCart: Product[] = [
    {
        desc:'Samsung Galaxy S7',
        price:700,
    },
    {
        desc:'iPad',
        price:360,
    },
    {
        desc:'Xiaomi Note 10 Pro',
        price:75,
    }
]

const [total, taxes] = taxCalc(shoppingCart);
console.log('Total: ',total);
console.log('Taxes: ',taxes);