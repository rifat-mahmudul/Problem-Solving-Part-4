/**
Your task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */


const calculateElectronicsBudget = (numberOfLaptop, numberOfMobile, numberOfTablet) => {
    const tablet = 15000;
    const mobile = 20000;
    const laptop = 35000;
    const tabletPrice = tablet * numberOfTablet;
    const mobilePrice = mobile * numberOfMobile;
    const laptopPrice = laptop * numberOfLaptop;

    const totalPrice = tabletPrice + mobilePrice + laptopPrice;

    return totalPrice;
}

const laptop = 4;
const mobile = 2;
const tablet = 5;
const total = calculateElectronicsBudget(laptop, mobile, tablet);

console.log(total);