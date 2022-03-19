//typescript basics


// OBJECT DESTRUCTURING

interface MusicPlayer {
    volume: number;
    seconds: number;
    song: string;
    details: Details;

}

interface Details {
    author: string;
    year: number;
}

const musicPlayer: MusicPlayer = {
    volume: 10,
    seconds: 10,
    song: 'In The End',
    details:{
        author:'Linkin Park',
        year:2010,
    }

}

const {volume, details, details:{author}} = musicPlayer;

console.log(details);
console.log(author)


// ARRAY DESTRUCTURING
const artists:string[] = ['Headhunterz', 'Wasted Penguinz', 'Spars', 'Sub Zero Project']

const [,,a3] = artists;

console.log(a3)

// ARGUMENT DESTRUCTURING

export interface Product {
    desc:string;
    price:number;
}

const p1: Product = {
    desc:'Nike Air Max',
    price:150,
}
const p2: Product = {
    desc:'Nike Air Force',
    price:70,
}

export function taxCalc(products: Product[]): [number, number]{
    let total = 0;
    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * 0.21];
}

const products = [p1, p2];

const taxes = taxCalc(products);

console.log(taxes)

