
//lista de palavras
let palavras = [
	['banana', 'FRUTA'], 
	['lapis', 'ESCOLA'], 
	['capacete', 'MOTO'],
	['impressora', 'ESCRITÓRIO'],
	['violao', 'MUSICA'],
	['pneu', 'CARRO'],
	['frigideira', 'COZINHA'],
	['manete', 'AVIÃO'],
	['apagador', 'ESCOLA'],
	['freio', 'CARRO'],
	['rinoceronte', 'ANIMAL'],
	['girafa', 'ANIMAL'],
	['cardapio', 'RESTAURANTE'],
	['prato', 'RESTAURANTE'],
	['professora', 'ESCOLA'],
	['gasolina', 'CARRO'],
	['geladeira', 'COZINHA'],
	['garfo', 'COZINHA'],
	['radar', 'AVIÃO'],
	['bateria', 'MUSICA'],
	['abacaxi', 'FRUTA'],
	['goiaba', 'FRUTA'],
	['acerola', 'FRUTA']
];

function gerar_palavra() {
	let dica = document.getElementById('dica');
	let indice = document.getElementById('indice');
	let numero = 0;
	let qtd_letras = 0;

	//gera numero aleatorio entre 0 a 22
	numero = Math.floor(Math.random() * 23);

	//guardar indice
	indice.value = numero;

	//numero de quadrados
	qtd_letras = palavras[numero][0].length;

	//mostrar a dica
	dica.innerHTML = 'Dica: ' + palavras[numero][1] + ', com ' + qtd_letras +' letras';

	//gerar quadrados
	gerar_quadrados(qtd_letras);
}

function gerar_quadrados(quantidade) {
	let forca = document.getElementById("forca");

	for (var i = 0 ; i < quantidade; i++) {
		let div = document.createElement('div');
		div.className = 'quadrado border m-1';
		div.id = 'q'+i;

		forca.appendChild(div);
	}
}

function ver_letra() {
	let input = document.getElementById('letra')
	let letra = input.value;
	let indice = document.getElementById('indice').value;
	let cont_erro = document.getElementById('erros');
	let num_erro = cont_erro.value;
	let cont_acert = document.getElementById('acertos');
	let num_acerto = cont_acert.value; 
	let situacao = false;

	//buscar a palavra
	let palavra = palavras[indice][0].split("");

	//verifica se tem letras correspondentes
	for (var i = palavra.length - 1; i >= 0; i--) {
		
		if(palavra[i] == letra){
			document.getElementById('q'+i).innerHTML = letra;
			situacao = true;
			num_acerto = parseInt(num_acerto) + 1; 
		}	
	}

	//salva a quantidade de acerto no input
	cont_acert.value = num_acerto;

	//verifica se a quantidade de acertos e igual quantidade de letras
	verifc_ganhou(num_acerto, palavra.length)
	//inserir historico
	historico(letra);

	//contagem de erro
	if(situacao == false){

		cont_erro.value = parseInt(num_erro) + 1;

		verifc_perdeu(cont_erro.value);
	}

	//limpa input
	input.value = "";
}

function verifc_ganhou(acertos, qtd_letras) {
	
	if(acertos == qtd_letras){
		finalizar("Parabens Ganhou ");
	}
	
}

function verifc_perdeu(id_heart) {
	
	let desenho = document.getElementById("desenho"); 
	//remove coração da tela
	let coracao = document.getElementById('h'+id_heart);
	coracao.remove();
	if(id_heart == 5){

		finalizar("Perdeu Otaro ");
	}

}

function finalizar(mensagem) {
	let letra = document.getElementById("letra").remove();
	let noticia = document.getElementById("notice");
	let recomeco = document.getElementById("again").classList.remove("invisivel");
	noticia.innerHTML = mensagem;

}

function historico(letra) {
	let div = document.getElementById('hist');

	let span = document.createElement('span');
	span.innerHTML = letra+', ';

	div.appendChild(span);
}
