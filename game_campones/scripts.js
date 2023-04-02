function selecionar(item) {
	let elemento = document.getElementById('selecionado').value = item
}

function inverte_lado(lado_atual) {
	if (lado_atual == 'lado_b') {
		return 'lado_a'
	}

	if (lado_atual == 'lado_a') {
		return 'lado_b'
	}
}

function emitir_avisos(texto, cor) {
	let aviso = document.getElementById('avisos')
	aviso.innerHTML = texto
	aviso.className = cor

	let btnLeva = document.getElementById('levar')
	btnLeva.hidden = true

	let btnReinia = document.getElementById('reiniciar')
	btnReinia.hidden = false
}

function verifica_win_over() {
	let janela = document.getElementById('janela_game')
	let indio = document.getElementById('indio').value
	let onca = document.getElementById('onca').value
	let tatu = document.getElementById('tatu').value
	let milho = document.getElementById('milho').value

	if (tatu == milho && tatu != indio) {
		emitir_avisos("Você perdeu !! deixou o tatu comer o milho", "text-danger")
		janela.className ="game_over janela_jogo row"
	}

	if (onca == tatu && onca != indio) {
		emitir_avisos("Você perdeu!! deixou a onça comer o tatu", "text-danger")
		janela.className ="game_over janela_jogo row"
	}

	if (tatu == 'lado_b' && milho == 'lado_b' && onca == 'lado_b') {
		emitir_avisos("Parabens!!!, vc é uma maquina, uma besta enjaulada!!!", "text-succsse")
	}
}

function trocar_lado() {
	//identifica qual item o usuario selecionou
	let elemento = document.getElementById('selecionado').value

	//verifica se algum item está selecionado
	if (elemento != "0") {
		//pega qual é o destino do item
		let destino = document.getElementById('destino')

		//seleciona o lado do conforme o destino
		let lado = document.getElementById(destino.value)

		//seleciona o item que o usuario escolheu
		let item = document.getElementById(elemento)
		//atribui ao item o valor do lado que ele vai
		item.value = destino.value

		//muda o item para o lado de destino
		lado.appendChild(item)


		//se o indio for o item selecionado então não precisará executar esse codigo
		if (elemento != 'indio') {

			//se o item selecionado for diferente do indio então o indio acompanhará o item
			let indio = document.getElementById('indio')
			indio.value = destino.value
			lado.appendChild(indio);
		}

		//estabelece o destino de voltar
		destino.value = inverte_lado(destino.value);

		//retira a seleção anterior
		elemento = document.getElementById('selecionado').value = "0";

		verifica_win_over();
	} else{
		alert("Selecione um Item para atravessar")
	}
}