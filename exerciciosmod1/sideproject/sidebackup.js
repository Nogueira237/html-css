const caixa = document.querySelector(".caixa")
const caixa2 = document.querySelector(".caixa2")
const nomes = document.querySelectorAll(".nomes")
const botaotransferir = document.querySelector("#botaotransferir")
const botaolimpar = document.querySelector("#botaolimpar")
const botaovoltar = document.querySelector("#botaovoltar")

nomes.forEach(nomes=>{nomes.setAttribute("class","naos")})
const naos = document.querySelectorAll(".naos")

caixa.appendChild(...naos)

nomes.forEach(nomes =>{
    nomes.addEventListener("click",()=>{
        nomes.removeAttribute("class","nomes")
        nomes.removeAttribute("class","naos")
        nomes.setAttribute("class", "marcado")
    
    })
    
})
    
let marcado = document.querySelectorAll(".marcado")
    marcado.map((el)=>{
    el.addEventListener("click",()=>{
        el.removeAttribute("class","marcado")
        el.setAttribute("class","naos")
    })
})
    
botaolimpar.addEventListener("click",()=>{
    nomes.forEach(nomes =>{
    nomes.removeAttribute("class","marcado")
    nomes.setAttribute("class", "naos")})

})

botaotransferir.addEventListener("click",()=>{
    const n1=document.querySelectorAll(".marcado")
    nomes.forEach(nomes=>{
    caixa2.appendChild(...n1)
    nomes.removeAttribute("class","marcado")
    nomes.setAttribute("class","naos")
})
})
botaovoltar.addEventListener("click",()=>{
    const n2=document.querySelectorAll(".marcado")
    nomes.forEach(nomes=>{ 
     caixa.appendChild(...n2)
    nomes.removeAttribute("class","marcado")
    nomes.setAttribute("class","naos")
})



    


})



 







