//Find the lowest number in the array below.



function lowestNumber(numbers){

    let min = numbers[0];

    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }

    return min;
}

console.log(lowestNumber())