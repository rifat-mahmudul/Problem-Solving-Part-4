/**
Find the friend with the smallest name.
*/

function lowestName(names){

    let smallestName = names[0];

    for(const name of names){
        if(name.length < smallestName.length){
            smallestName = name;
        }
    }

    return smallestName;
}

const lowest = ['Rifat', 'Lamiya', 'Shorifa', 'Kona'];

console.log(lowestName(lowest));