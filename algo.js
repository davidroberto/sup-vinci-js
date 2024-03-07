// Types primaire
const firstName = "david";
const age = 34;
const isTeacher = true;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isTeacher);

if (firstName !== isTeacher) {
  console.log("okay");
}

// Types composites

const languages = ["Javascript", "Typescript", "PHP", "Java"];

console.log(languages);
console.log(languages[1]);

const address = {
  city: "Lège Cap-ferret",
  zipcode: 33950,
  country: "France",
};

console.log(address);
console.log(address.country);

// conditions

const studentGrade = 15;
const minReTake = 11;
const minGrade = 9;

if (studentGrade >= minReTake) {
  console.log("Exam réussi");
} else if (studentGrade >= minGrade) {
  console.log("Rattrapage");
} else {
  console.log("Echec");
}

// boucles

const students = ["Jp", "Fred", "Marc", "Eugenie", "Claire"];

students.map((student) => {
  console.log(student);
});

// fonction

function addNumber(number1, number2) {
  const result = number1 + number2;

  console.log(result);
}

addNumber(2, 5);
addNumber(5, "vélo");
