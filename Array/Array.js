const ages = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

const newAges = [];
const data = [];

function checkAge() {
  console.log(ages.filter((age) => age > 16));
}

function insertIntoArray() {
  let myPushedData = ages.filter((age) => age > 14);
  let data = newAges.push(myPushedData);
  console.log(newAges);
  console.log("First element of the array: ", newAges[0][0]);
  newAges[0].forEach((age) => {
    console.log(((age * 2) / 3).toFixed());
  });
}

function findAge(age) {
  if (age > 12) {
    return age;
  }
}

function result(findAge) {
  console.log("Age found greater than 12 is: ", ages.find(findAge));
  console.log(ages);
}

function mapAge() {
  console.log(
    "Ages are:",
    ages.filter((age) => {
      return age > 16;
    })
  );
}

const users = [
  {
    id: 1,
    name: "Pew Paul",
    address: "Jashore",
    age: 12,
    country: "Bangladesh",
    education: [
      {
        id: 10,
        name: "Arpita Paul-10",
        address: "Jashore",
        age: 18,
        country: "Bangladesh",
        degree: "MA",
        result: "second class",
        passed: 2020,
      },
    ],
    home: [
      {
        id: 11,
        name: "Supti Paul-11",
        address: "Jashore",
        age: 18,
        country: "Bangladesh",
        degree: "MA",
        result: "second class",
        passed: 2022,
      },
    ],
    foreign: [
      {
        id: 12,
        name: "Sagar Paul-12",
        address: "Jashore",
        age: 32,
        country: "Bangladesh",
        degree: "MA",
        result: "second class",
        passed: 2022,
      },
    ],
  },
  {
    id: 2,
    name: "Supti Paul",
    address: "Jashore",
    age: 19,
    country: "Bangladesh",
  },
  {
    id: 3,
    name: "Arpita Paul",
    address: "Jashore",
    age: 23,
    country: "Bangladesh",
  },
];
function objectMapping() {
  users.map((user) => {
    {
      if (user.age > 12) {
        console.log(
          "Id:",
          user.id,
          "Name:",
          user.name,
          "Address: ",
          user.address,
          "Age: ",
          user.age,
          "Country:",
          user.country
        );
      }
    }
  });
  users[0].home.map((user) => {
    {
      if (user.age > 12) {
        console.log(
          "Id:",
          user.id,
          "Name:",
          user.name,
          "Address: ",
          user.address,
          "Age: ",
          user.age,
          "Country:",
          user.country
        );
      }
    }
  });

  users[0].foreign.map((user) => {
    {
      if (user.age > 12) {
        console.log(
          "Id:",
          user.id,
          "Name:",
          user.name,
          "Address: ",
          user.address,
          "Age: ",
          user.age,
          "Country:",
          user.country
        );
        console.log(user.id);
      }
    }
  });
}

checkAge();
insertIntoArray();
result(findAge);
mapAge();
objectMapping();
