//need to return money only when customer gives 10,20 notes
//and we can have to return either five or 10rupees (returning values are: 5 or 15)
function LemonadeChange(bills = []) {
  let five = 0;
  let ten = 0;

  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        five = five + 1;
        break;
      case 10:
        if (five) {
          five = five - 1;
          ten += 1;
        } else {
          return false;
        }
        break;
      //for 20
      default:
        if (five && ten) {
          five -= 1;
          ten -= 1;
        } else if (five >= 3) {
          five -= 3;
        } else {
          return false;
        }
    }
  }
  return true;
}

//Note customer will only can have up to max value bill of 20
const Bills = [5, 5, 5, 10, 20];
console.log(LemonadeChange(Bills));
const Bills2 = [5, 5, 10, 10, 20];
console.log(LemonadeChange(Bills2));
