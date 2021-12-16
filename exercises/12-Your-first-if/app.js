var total = prompt('How many km are left to go?');

// Your code below:
function kmLeft(km){
    if (km>100){
        return  "We still have a bit of driving left to go?";
    }
    else if (km>50){
        return "We'll be there in 5 minutes";
    }
    else{
        return "I'm parking, I see you right now";
    }
}
console.log(kmLeft(total));