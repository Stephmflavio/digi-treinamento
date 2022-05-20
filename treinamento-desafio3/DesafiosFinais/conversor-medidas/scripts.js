function conversorMedidas() {
    const medidaMetro = Number(window.prompt(
            'Digite uma distância em metros (m)'
        ))

    let resposta = document.getElementById('resposta')
    resposta.innerHTML = `
        <h2>
            <strong>
                A distância de ${medidaMetro} metros, corresponde a...
            </strong>
        </h2>
    `

    let km = (medidaMetro / 1000).toFixed(3).replace(",", ".")
    let hm = (medidaMetro / 100).toFixed(3).replace(",", ".")
    let dam = (medidaMetro / 10).toFixed(3).replace(",", ".")
    let dm = (medidaMetro * 10).toFixed(1)
    let cm = (medidaMetro * 100)
    let mm = (medidaMetro * 1000)

    resposta.innerHTML += `${km} quilômetros (Km)</br></br>`
    resposta.innerHTML += `${hm} quilômetros (Hm)</br></br>`
    resposta.innerHTML += `${dam} quilômetros (Dam)</br></br>`
    resposta.innerHTML += `${dm} quilômetros (dm)</br></br>`
    resposta.innerHTML += `${cm} quilômetros (cm)</br></br>`
    resposta.innerHTML += `${mm} quilômetros (mm)</br></br>`

}