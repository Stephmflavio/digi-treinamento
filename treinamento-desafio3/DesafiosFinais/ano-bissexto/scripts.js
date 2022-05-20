function anoBissexto () {
    const anoUsuario = Number(window.prompt(
            'Qual é o ano que você quer verificar? '
        ))
    let saida = document.getElementById('saida')
    saida.innerHTML = `
        <h2>
            <strong>
                Analisando o ano de ${anoUsuario}...
            </strong>
        </h2>
    `

    if (
        anoUsuario % 4 == 0
    ) {
        saida.innerHTML += `<p>O ano de ${anoUsuario} é Bissexto!</p>`
    }
    else {
        saida.innerHTML += `<p>O ano de ${anoUsuario} não é Bissexto!</p>`
    }

}

