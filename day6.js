let adicionaComida = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda 'sim' ou 'não'.")
let frutas = []
let laticinios = []
let doces = []
let congelados = []

while (adicionaComida == 'sim'){
	let comida = prompt("Qual comida você deseja inserir?")
	let categoria = prompt("Em qual categoria essa comida se encaixa? Digite 'frutas', 'laticínios', 'doces' ou 'congelados'.")

	if (categoria == 'frutas') {
		frutas.push(comida)
	} else if (categoria == 'laticínios') {
		laticinios.push(comida)
	} else if (categoria == 'doces') {
		doces.push(comida)
	} else if (categoria == 'congelados'){
		congelados.push(comida)
	} else {
		alert ('Categoria inválida')
	}

	adicionaComida = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda 'sim' ou 'não' ou 'remover'.")
	if (adicionaComida == 'não'){
		break
	} else if (adicionaComida == 'remover') {
		remove = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
		if (frutas.indexOf(remove) != -1){
			frutas.splice(frutas.indexOf(remove), 1)
			alert(`O item ${remove} foi removido com sucesso!`)
		} else if(laticinios.indexOf(remover) != -1){
			laticinios.splice(laticinios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (congelados.indexOf(remover) != -1){
			congelados.splice(congelados.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
	}
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`)