function descontoProdutos () {
    const produtoUsuario = prompt(
        'Qual é o produto que você está comprando?'
    )

    const valorProduto = Number(window.prompt(
            `Qual é o preço do(a) ${produtoUsuario}?`
        ))
        
    let saida = document.getElementById('saida')
    saida.innerHTML = `
        <h2>
            <strong>
                Calculando desconto de 10% para ${produtoUsuario}
            </strong>
        </h2>
    `
    
    let descontoProduto = ((valorProduto / 100) * 10).toFixed(2)
    let valorFinal = (valorProduto - descontoProduto).toFixed(2)

    saida.innerHTML += `<p>O preço original era ${valorProduto}.</p>`
    saida.innerHTML += `<p>Você acaba de ganhar R$${descontoProduto} de desconto (-10%).</p>`
    saida.innerHTML += `<p>No fim, você vai pagar ${valorFinal} no seu prduto ${produtoUsuario}</p>`

}