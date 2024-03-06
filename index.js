// EXAMPLE 1 - Check if a Date is before another Date using JavaScript

function isBefore(date1, date2) {
  return date1 < date2;
}

const d1 = new Date('2022-02-24');
const d2 = new Date('2022-09-11');

console.log(isBefore(d1, d2)); // 👉️ true

console.log(isBefore(d2, d1)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a Date is after another Date using JavaScript

// function isAfter(date1, date2) {
//   return date1 > date2;
// }

// const d1 = new Date('2022-08-20');
// const d2 = new Date('2022-02-27');

// console.log(isAfter(d1, d2)); // 👉️ true

// console.log(isAfter(d2, d1)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Date is in the Past using JavaScript

// function isInThePast(date) {
//   const today = new Date();

//   // 👇️ OPTIONAL!
//   // This line sets the hour of the current date to midnight
//   // so the comparison only returns `true` if the passed-in date
//   // is at least yesterday
//   today.setHours(0, 0, 0, 0);

//   return date < today;
// }

// console.log(isInThePast(new Date())); // 👉️ false

// console.log(isInThePast(new Date('2022-01-25'))); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a Date is in the Future using JavaScript

// function isInTheFuture(date) {
//   const today = new Date();

//   // 👇️ OPTIONAL!
//   // This line sets the time of the current date to the
//   // last millisecond, so the comparison returns `true` only if
//   // date is at least tomorrow
//   today.setHours(23, 59, 59, 998);

//   return date > today;
// }

// const tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate() + 1);

// console.log(isInTheFuture(tomorrow)); // 👉️ true

// console.log(isInTheFuture(new Date('2021-01-25'))); // 👉️ false
