function gerarCartas() {
	let mesa = document.getElementById('mesa');
	let cartas = [
			'Version',
			'Release',
			'Upgrade',
			'Downgrade',
			'Restore',
			'Bot',
			'Cookies',
			'Web browser',
			'Plug-in',
			'Extension',
			'Bookmark',
			'Search engine',
			'Versão',
			'Liberar',
			'Atualizar',
			'Rebaixar',
			'Restaurar',
			'Robô',
			'Biscoitos',
			'Navegador da web',
			'Plugar',
			'Extensão',
			'Marca páginas',
			'Mecanismo de busca'
		];

	//array randomico
	let random = [];
	let numero = 0;

	//loop para gerar um array de numeros aleatorios 
	let x = 1;
	while(x <= 24){

		//gera numero aleatorio entre 0 a 23
		numero = Math.floor(Math.random() * 24);

		//verifica se o numero ja está no array,
		if (!random.includes(numero)) {

			//insere o numero aleatoria ao array random
			random.push(numero);

			document.getElementById(x).innerHTML = cartas[numero];
			document.getElementById(x).name = numero;

			x++;
		}
	}
}

function verifica(id) {
	// revelar a carta
	let carta = document.getElementById(id);
	carta.className = "visivel";

	//contar as cartas clicadas
	qtd = document.getElementById('contador');
	vlr = parseInt(qtd.value);
	qtd.value = vlr+1

	if (qtd.value == 3) {

		qtd.value = 1;
		esconder();
		limpar();
	}
	//adiciona o conteudo da carta dentro do verificador
	document.getElementById('verificador'+qtd.value).value = id;

	//quando o usuario escolher a segunda carta
	if (qtd.value == 2) {

		//se as duas que estiverem no verificardor forem correspondentes
		if (comparar()) {
			qtd.value = 0;
			limpar();
		}
	}
}

function limpar() {
	document.getElementById('verificador1').value = '';	
	document.getElementById('verificador2').value = '';
}

function esconder() {
	let id = 0;
	//esconder as carta dos verificadores
	let verificardor1 = document.getElementById('verificador1');
	id = verificardor1.value;
	let certa1 = document.getElementById(id).className = "invisivel";

	let verificardor2 = document.getElementById('verificador2');
	id = verificardor2.value
	let certa2 = document.getElementById(id).className = "invisivel";
}

function comparar() {
	let situacao = false;
	let cartas = [];
	cartas['Version'] = 0;
	cartas['Release'] = 1;
	cartas['Upgrade'] = 2;
	cartas['Downgrade'] = 3;
	cartas['Restore'] = 4;
	cartas['Bot'] = 5;
	cartas['Cookies'] = 6;
	cartas['Web browser'] = 7;
	cartas['Plug-in'] = 8;
	cartas['Extension'] = 9;
	cartas['Bookmark'] = 10;
	cartas['Search engine'] = 11;
	cartas['Versão'] = 12;
	cartas['Liberar'] = 13;
	cartas['Atualizar'] = 14;
	cartas['Rebaixar'] = 15;
	cartas['Restaurar'] = 16;
	cartas['Robô'] = 17;
	cartas['Biscoitos'] = 18;
	cartas['Navegador da web'] =19;
	cartas['Plugar'] = 20;
	cartas['Extensão'] = 21;
	cartas['Marca páginas'] = 22;
	cartas['Mecanismo de busca'] = 23;

	//recupera o id que está guardado no verificar 
	let id1 = document.getElementById('verificador1').value;
	let id2 = document.getElementById('verificador2').value;

	//recupra a palavra dentro da carta
	let palavra1 = document.getElementById(id1).innerHTML;
	let palavra2 = document.getElementById(id2).innerHTML;

	//comparar valores das carta
	let numero1 = parseInt(cartas[palavra1]);
	let numero2 = parseInt(cartas[palavra2]);
	let resultado = numero1 - numero2;

	//verificar se as cartas tem valores iguais
	if (resultado == 12 || resultado == -12) {
		situacao = true;

		//mudar estilos das cartas
		let carta1 = document.getElementById('carta'+id1);
		carta1.classList.add("hit");

		let carta2 = document.getElementById('carta'+id2);
		carta2.classList.add("hit");

		//verificar quantos estão ok
		let mesa = document.getElementsByClassName("hit");
		let qtd = mesa.length

		if (qtd == 24) {
			console.log("vc terminou")
			//enviar formulario do nome e do tempo
			document.getElementById("formulario").submit();
		}
	}
	
	return situacao;	
}