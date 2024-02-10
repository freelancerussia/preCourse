const giveMeRightCondition = (value1, value2, maximum) => {
   if (value1 === value2 && value1 <= maximum) {
      console.log('Success!');
   } else {
      console.log('Something wrong!');
   }
}
giveMeRightCondition(1000, 100, 100)



// let passport = {
//    name: "Petr",
//    surname: "Petrov",
// };

// let newPassport = {
//    ...passport,
//    name: "Ivan"
// }

// console.log(newPassport.name);
// console.log(passport.name);