
//typescript basics

interface Passenger {
  name: string;
  children?: string[]
}

const passenger1: Passenger = {
  name: 'Fernando'
}

const passenger2: Passenger = {
  name: 'Melissa',
  children: ['Natalia','Gabriel']
}


function printChildren( p: Passenger ): void {

  const howManyChildren = p.children?.length || 0;
  
  console.log( howManyChildren );

}


printChildren( passenger1 );