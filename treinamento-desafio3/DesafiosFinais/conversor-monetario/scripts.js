const cotacaoDollar = Number(prompt(
    'Antes de mais nada. Quanto está a cotação do dolar agora?'
))

function reaisParaDolar () {
    const quantidadeDinheiroUsuario = Number(window.prompt(
        'Quantos R$ você tem na carteira?'
    ))

    let reaisConvertidoDolar = (quantidadeDinheiroUsuario / cotacaoDollar).toFixed(2)
    let saida = document.getElementById('saida')
    saida.innerHTML = `
        <h2>
            <strong>
                O usuário conseguirá comprar US$${reaisConvertidoDolar}.
            </strong>
        </h2>
    `
}