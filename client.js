const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
const maxBonus = 0.13;

function bonusPercentage(employee){
  let percentage = 0;
  switch(employee.reviewRating){
    case 3:
      percentage = 0.04;
      break;
    case 4:
      percentage = 0.06;
      break;
    case 5:
      percentage = 0.1;
      break;
  }
  return percentage;
}

function senior(employee){
  if(employee.employeeNumber.length === 4){
    return true;
  }
  else{
    return false;
  }
}

function incomeCount(employee){
  if(Number(employee.annualSalary) >= 65000){
    return true;
  }
  else{
    return false;
  }
}

function calculateTotalCompensation(employee){
  let total = 0;
  let percentage = bonusPercentage(employee);
  let totalPercentage = percentage;
  const seniorityBonus = 0.05;
  if(senior(employee)){
    totalPercentage += seniorityBonus;
  }
  if(incomeCount(employee)){
    totalPercentage -= 0.01;
  }
  if(totalPercentage > maxBonus){
    totalPercentage = maxBonus;
  }
  if(totalPercentage < 0){
    totalPercentage = 0;
  }
  switch(percentage){
    case 0:
      total = Number(employee.annualSalary) + Number(employee.annualSalary)*totalPercentage;
      break;
    case 0.04:
      total = Number(employee.annualSalary) + Number(employee.annualSalary)*totalPercentage;
      break;
    case 0.06:
      total = Number(employee.annualSalary) + Number(employee.annualSalary)*totalPercentage;
      break;
    case 0.1:
      total = Number(employee.annualSalary) + Number(employee.annualSalary)*totalPercentage;
      break;
  }
  return total;
}

function constructor(name, bonusPercentage, totalCompensation, totalBonus){
  let obj = {name: name, bonusPercentage: bonusPercentage, totalCompensation: totalCompensation, totalBonus:totalBonus};
  return obj;
}

function bonus(employee){
  let obj = constructor(employee.name, bonusPercentage(employee), calculateTotalCompensation(employee), Math.round(calculateTotalCompensation(employee)));
  return obj;
}

console.log(bonus(employees[0]));
console.log(bonus(employees[1]));
console.log(bonus(employees[2]));
console.log(bonus(employees[3]));
console.log(bonus(employees[4]));
