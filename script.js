// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

const isDivBy5 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0
const isFirstNumLargerThanLastNum = n1 > n4
const arithmeticChain = ((n2 - n1) * n3) / 5

// Finally, log the results.
console.log(`
  Check one: add up to 50: ${isSum50}
  Check two: at least two odd numbers: ${isTwoOdd}
  Check three: no number larger than 25: ${isUnder25}
  Check four: all unique numbers: ${isUnique}
  Check Five: Are all 4 Previous Checks true: ${isValid}
  Check 6: divisible by 5: ${isDivBy5}
  Check 7: First number larger than last: ${isFirstNumLargerThanLastNum}
  `);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// Part 2 ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
let tripDistance = 1500
let budget = 175
let fuelCost = 3

// 55mph at 30mpg
let mph55 = 55
let mpg55 = 30

// 60mph at 28mpg
let mph60 = 60
let mpg60 = 28

//75pmh at 23mpg
let mph75 = 75
let mpg75 = 23

// How many gallons of fuel will you need for the entire trip?

function gallonsOfFuel(mpg, tripDistance) {
  return tripDistance / mpg
}

function gallonsOfFuelText(mph, mpg, tripDistance) {
  console.log(`You will need ${gallonsOfFuel(mpg, tripDistance)} gallons of fuel to go ${mph} mph`)
}

console.log(
  gallonsOfFuelText(mph55, mpg55, tripDistance),
  gallonsOfFuelText(mph60, mpg60, tripDistance),
  gallonsOfFuelText(mph75, mpg75, tripDistance)
)

// Will your budget be enough to cover the fuel expense?

function willBudgetCover(mpg, tripDistance, fuelCost, budget) {
  return ((gallonsOfFuel(mpg, tripDistance) / fuelCost) < budget)
}

function willBudgetCoverText(mph, mpg, tripDistance, fuelCost, budget){
  let gasPrice = (gallonsOfFuel(mpg, tripDistance) * fuelCost)
  if (gasPrice < budget) {
    console.log(`The gas price of $${gasPrice} will be enough for the ${mph}mph roadtrip at the $${budget} budget`)
  } else {
    console.log(`The gas price of $${gasPrice} will not be enough for the ${mph}mph roadtrip at the $${budget} budget`)
  }
}

console.log(
  willBudgetCoverText(mph55, mpg55, tripDistance,fuelCost, budget),
  willBudgetCoverText(mph60, mpg60, tripDistance,fuelCost, budget),
  willBudgetCoverText(mph75, mpg75, tripDistance,fuelCost, budget)
)

// How long will the trip take, in hours?

function tripTime(mph, tripDistance) {
  return tripDistance / mph
}

function tripTimeText(mph, tripDistance){
  console.log(`The trip will take ${tripTime(mph, tripDistance)} hours at ${mph}mph`)
}

console.log(
  tripTimeText(mph55, tripDistance),
  tripTimeText(mph60, tripDistance),
  tripTimeText(mph75, tripDistance),
)

