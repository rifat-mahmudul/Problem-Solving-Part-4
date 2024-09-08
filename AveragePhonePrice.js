/**
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
 */


function findAveragePhonePrice(phonePrice){
    let totalPrice = 0;
    for(const phone of phonePrice){
        totalPrice += phone.price;
    }
    const avgPrice = totalPrice / phonePrice.length;
    return avgPrice;
}

console.log(findAveragePhonePrice());