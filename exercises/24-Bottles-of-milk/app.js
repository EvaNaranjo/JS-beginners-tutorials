// Your code here:
function bottlesOfMilk(){
    let lyrics1 = " bottles of milk on the wall";
    let comma = ", ";
    let dot = ".";
    let lyrics2 =  " bottles of milk.";
    let lyrics3 = " Take one down and pass it around, ";
    let lyrics4 ="1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall."
    let lyrics5 = " No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall."

    
// genarar numeros del 99 al 1
    for (var i=99;i>=0; i--){
        let result="";
        //print de song  
        if (i==0){
            result = lyrics5;
        } else if (i==1){
            result = lyrics4;
        }else{
            result = i + lyrics1 + comma + i + lyrics2 + lyrics3 + (i-1) + lyrics1 + dot;
        }
        console.log(result);
    }
    
}

bottlesOfMilk();





