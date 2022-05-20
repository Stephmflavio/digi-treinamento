function calculeBhaskara () {
    const valorA = Number(window.prompt(
        'Qual é o valor de A?'
    ))
    const valorB = Number(window.prompt(
        'Qual é o valor de B?'
    ))
    const valorC = Number(window.prompt(
        'Qual é o valor de C?'
    ))

    let saida = document.getElementById('saida')
    saida.innerHTML = `
        <h2>
            <strong>
                Resolvendo Bhaskara
            </strong>
        </h2>
    `
    const delta = valorB * valorB - 4 * valorA * valorC
    
    if(delta < 0){
        alert("Para Delta negativo, não existem raízes reais. <br/>")
    } else {

        let equacao = `${valorA}x² + ${valorB}x + ${valorC} = 0`
        let valorDelta = `∆ = ${valorB}² - 4 . ${valorA} . ${valorC}`
    
        saida.innerHTML += `A equação atual é <strong>${equacao}</strong><br/><br/>`
        saida.innerHTML += `O calculo realizado será <strong>${valorDelta}</strong><br/><br/>`
        saida.innerHTML += `O valor calculado foi ∆ = ${delta}`
    
    }
}