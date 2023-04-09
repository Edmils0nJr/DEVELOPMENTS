function calcular_imc() {
	//buscar os dados
	let peso = document.getElementById('peso').value;
	let altura = document.getElementById('altura').value;
	let img = '';	

	//verifica se dados são diferentes de zero
	if (peso > 0 && altura > 0) {

		// calculo da altura ao quadrado
		let altura_quadrada = altura*altura;

		//calculo do imc
		let imc = peso / altura_quadrada;

		// qual classificação do imc
		if(imc < 18.5) {
		    img = "1.abaixo_peso.png";
		}
		
		if(imc >= 18.5 && imc <= 24.999){
		    img = "2.peso_normal.png";
		}
		
		if(imc >= 25 && imc <= 29.999){
		    img = "3.sobrepeso.png";
		}
		
		if(imc >= 30 && imc <= 34.999){
		    img = "4.obesidade_grau1.png";
		}
		
		if(imc >= 35 && imc <= 39.999){
		    img = "5.obesidade_grau2.png";
		}
		
		if(imc >= 40){
		    img = "6.obesidade_grau3.png";
		}

		//mostrar img da classificação
		document.getElementById('classific').innerHTML = "Seu IMC É: "+imc.toFixed(2);
		document.getElementById('imagem').src = img;

		//se peso for maior do que o normal
		if (imc > 24.999) {

			//quantos quilos deve perder
		    let peso_ideal = 24.999*altura_quadrada
		    peso = peso-peso_ideal

			//mostrar resultado da erca de quilos
			document.getElementById('quilos').innerHTML = "Você precisa perder "+peso.toFixed(2)+" quilos!";
		} else{
			document.getElementById('quilos').innerHTML = "";
		}

		//mostrar div do resultado
		document.getElementById('resultado').hidden = false
	}
}