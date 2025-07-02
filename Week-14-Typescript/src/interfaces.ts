interface UserType {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

function greetUser(user: UserType) {
  console.log(`Hello ${user.firstName}`);
}

function isLegal(user: UserType) {
  console.log(user.age > 18);
}

let user1: UserType = {
  firstName: "Harsh",
  lastName: "Vats",
  age: 21,
  email: "",
};

greetUser(user1);
isLegal(user1);


// Making address optional by adding '?'
interface User1 {
    name: string;
    age: number;
    address?: {
        city: string;
        country: string;
    pincode: number;
  };
}

let FirstUser: User1 = {
  name: "Harsh",
  age: 21,
  address: {
    city: "mycity",
    country: "mycountry",
    pincode: 696969,
  },
};

let SecondUser: User1 = {
  name: "Harsh two years back",
  age: 19,
};

