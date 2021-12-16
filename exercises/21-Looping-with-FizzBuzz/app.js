function fizzBuzz() {  
	// generate numbers from 1 to 100
		let num = 0;
	for (let i=0; i<100; i++){
		num = num +1;

		// si num es multiplo de 3 y de 5 imprimir FizzBuzz	
		 if (num % 3 == 0 && num % 5 == 0){
		console.log("FizzBuzz");
		 	
		//si num es multiplo de 3 imprimir Fizz
		 } else if (num % 3 == 0){
			console.log("Fizz");
		
		//si num es multiplo de 5 imprimir Buzz
		} else if (num % 5 == 0){
			console.log ("Buzz");

		//para el resto imprimir el numero
		} else{
			console.log (num);
		}
	}
}
fizzBuzz();
