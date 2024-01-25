const giveMeRightCondition = (value1, value2, maximum) => {
   if (value1 === value2 && value1 <= maximum) {
      return 'Success!';
   } else {
      return 'Something wrong!';
   }
}

console.log(giveMeRightCondition(100, 100, 20));
