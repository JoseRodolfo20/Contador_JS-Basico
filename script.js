const inicio = document.querySelector('input#inicio')
const fim = document.querySelector('input#fim')
const passo = document.querySelector('input#passo')
const res = document.querySelector('p#res')
const btn = document.querySelector('input#btn')

btn.addEventListener('click', calcular)
function calcular(){
    if(inicio.value.length == '' && fim.value.length == '' && passo.value.length == ''){
        alert('[ERRO]: Preencha os campos.')
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i <= f){
            for(let cont = i; cont <= f; cont += p){
                res.innerHTML += `${cont} `
            }
        }else if(i >= f){
            for(let cont = i; cont >= f; cont -= p){
                res.innerHTML += `${cont} `
            }
        }
    }
}