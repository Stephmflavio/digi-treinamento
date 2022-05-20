function boasVindas () {
    const nomeUsuario = prompt(
        'Qual é o seu nome?'
    )
    const idadeUsuario = Number(window.prompt(
        `Olá, ${nomeUsuario}! Quantos anos você tem?`
    ))

    
    alert(`Acabei de conhecer ${nomeUsuario}, quem tem ${idadeUsuario} anos de idade!`)    
}