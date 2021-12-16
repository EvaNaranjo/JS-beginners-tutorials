/*function sing(){
    return 'let it be, let it be, let it be, let it be, whisper words of wisdom, let it be, let it be, let it be, let it be, let it be, there will be an answer, let it be';
}*/

function sing(){
    let lyrics1 = "let it be";
    let comma = ", "
    let lyrics2 = "whisper words of wisdom, ";
    let lyrics3 = "there will be an answer, ";
    
    let result = "";
    //repetir let it be 4 veces
    for (let i=0; i<4; i++){
        result = result + lyrics1+ comma; 
    }
    //poner lyric2
    result =result +lyrics2;

    //repetir lyric 1 5 veces
    for (let i=0; i<5; i++){
        result = result + lyrics1 +comma; 
    }

    //poner lyric 3
    result = result + lyrics3;

    //poner lyric 1
    result=result +lyrics1;

    return result;
}

//Your code above ^^^

console.log(sing());