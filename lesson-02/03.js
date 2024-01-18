const giveMeRightNumbers = (value1, value2, maximum) => {
   if (value1 === value2 || value1 <= maximum) {
      console.log('Success!');
   } else {
      console.log('Something wrong!');
   }
}
giveMeRightNumbers(200, 10, 20);
giveMeRightNumbers(100, 100, 200);

