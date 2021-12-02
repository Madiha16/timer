//get arguments from command line
let input = process.argv.slice(2);

// for input greater than 0, loop through input values
//output a beep sound for input values in seconds (*1000)
for (let num of input) {
  if (num > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(num);
    }, num * 1000);
  }
}

// Example usage:
// node timer1.js 10 3 5 15 9
// This will make it beep at:
// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds


// For this app, we can think of at least these three:

//// No numbers are provided: Easy. It should just not beep at all and end immediately since no
// beeps should get scheduled.

//// An input is a negative number: Ignore/skip any numbers that are negative. We can't
// schedule anything in the past.

//// An input is not a number: Ignore/skip these as well, instead of attempting to call
// setTimeout with a non-number.