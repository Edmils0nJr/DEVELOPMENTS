function escolher(escolhido) {
	let bin_dec = document.getElementById('bin_dec');
	let dec_bin = document.getElementById('dec_bin');

	if (escolhido == 'bin_dec') {

		bin_dec.hidden = false;
		dec_bin.hidden = true;
	}

	if (escolhido == 'dec_bin') {

		bin_dec.hidden = true;
		dec_bin.hidden = false;
	}
}

function limpa() {
	let bin_dec = document.getElementById('binario')
	let valor = bin_dec.value;

	valor = valor.replace(/\D+/g, "");
	valor = valor.replace(/[2-9]/g, "")

	bin_dec.value = valor;
}

function bin_dec() {
	let bin_dec = document.getElementById('binario').value;
	let result = document.getElementById('result_em_dec')
	let valor = 0;
	let total = 0;
	let y = 1;
	
	//contar numero de casas
	let contgm_casas = bin_dec.length;

	//transforma a string array
	let arrayBin = bin_dec.split("");

	//loop com numero de casas
	for (var x =  contgm_casas - 1; x >= 0; x--) {

		//pega o valor da casa x
		valor = parseInt(arrayBin[x]);
		
		//multiplicar o valor da casa por 2 elevado a x pontencia e somar ao total
		total += valor*y

		//proximo loop o valor de y será o dobro
		y = y*2

	}
	result.innerHTML = "o numero "+bin_dec+" em decimal é = "+total
	
}

function dec_bin(argument) {
	//com o console de seu navegador aberto fica mais facil o acompanhamento
	let valor = document.getElementById('decimal').value;
	let result = document.getElementById('result_em_bin');
	let quoc = valor;
	let modulo = 0;
	let bin = [];

	console.log(bin);

	//loop enquanto quociente for maio ou igual 2
	while(quoc >= 2){
		console.log("valor = "+quoc+" / 2")
		modulo = quoc%2;
		console.log("resto = "+modulo);

		quoc = parseInt(quoc/2);
		console.log("quociente = "+quoc);
		console.log("----");
		
		bin.unshift(modulo);
	}
	bin.unshift(quoc);
	console.log(bin);

	let texto = bin.toString();
	texto = texto.replace(/,/g, "");
	result.innerHTML = "o numero "+valor+" em binario é ="+texto
}