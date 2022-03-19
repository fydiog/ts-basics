//TypeScript Interfaces

// const user = {
//     name: "Fidel",
//     id: 0,
//   };

//Interface that describes this objects shape.

interface User {
    name: string;
    id: number;
    skills: string[];
    gender?: string; // ? makes this field optional
}

//Now we can specify that our object conforms to the shape of the "User" interface

const user : User = {
    name: "Fidel",
    id: 0,
    skills: ['communication', 'problem-solving', 'productivity']
  };

//This can also be used in functions

function getUser(user: User){
    console.log(user)
}

getUser(user);