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

	adicionaComida = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda 'sim' ou 'não'.")
	if (adicionaComida == 'não'){
		break
	}
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`)