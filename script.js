let adicao = document.getElementById('txa')
let adicao2 = document.getElementById('txa2')
let resa = document.getElementById('resultadoa')
let subtracao = document.getElementById('txs')
let subtracao2 = document.getElementById('txs2')
let ress = document.getElementById('resultados')
let multiplicacao = document.getElementById('txm')
let multiplicacao2 = document.getElementById('txm2')
let resm = document.getElementById('resultadom')
let divisao = document.getElementById('txd')
let divisao2 = document.getElementById('txd2')
let resd = document.getElementById('resultadod')

    function somar() {
        if(adicao.value.length == 0 || adicao2.value.length == 0 ) {
            alert('Digite um numero em cada caixa para fazer a adicao')
        } else {
            let ad = Number(adicao.value)
            let ad2 = Number(adicao2.value)
            
            let soma = ad + ad2
            resa.innerHTML = `${soma}`
        }
        adicao.focus()
        adicao.value = ''
        adicao2.value = ''
        // taba.value = ''
    }

    function subtrair() {
        if(subtracao.value.length == 0 || subtracao2.value.length == 0) {
            alert('Digite um numero em cada caixa para fazer a subtracao')
        } else {
            let su = Number(subtracao.value)
            let su2= Number(subtracao2.value)

            let sub = su - su2
            ress.innerHTML = `${sub}`
        }
        subtracao.focus()
        subtracao.value = ''
        subtracao2.value = ''
    }

    
    function multiplicar() {
        if(multiplicacao.value.length == 0 || multiplicacao2.value.length == 0) {
            alert('Digite um numero em cada caixa para fazer a multiplicacao')
        } else {
            let mu = Number(multiplicacao.value)
            let mu2 = Number(multiplicacao2.value)

            let mul = mu * mu2
            resm.innerHTML = `${mul}`
        }
        multiplicacao.focus()
        multiplicacao.value = ''
        multiplicacao2.value = ''
    }

    function dividir() {
        if (divisao.value.length == 0 || divisao2.value.length == 0) {
            alert('Digite um numero em cada caixa para fazer a divisao')
        } else {
            let di = Number(divisao.value)
            let di2 = Number(divisao2.value)

            let div = di/di2
            resd.innerHTML = `${div}`
        }
        divisao.focus()
        divisao.value = ''
        divisao2.value = ''
    }

    function limpar() {
        location.reload()
    }