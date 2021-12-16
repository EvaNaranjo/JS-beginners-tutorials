function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
	//generar 10 nuemros aleatorios entre 1 y 4
	for (let i=0; i<10; i++){
		//generar un mumero aleatorio entre 1 y 4
		let num;
		num = Math.floor(Math.random() * 4 + 1);
		//convertir el numero a color e imprimir a consola
		console.log(getColor(num));
		
	}
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

