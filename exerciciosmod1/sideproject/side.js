const caixa = document.querySelector(".caixa")
const caixa2 = document.querySelector(".caixa2")
const nomes = [...document.querySelectorAll(".nomes")]
const botaotransferir = document.querySelector("#botaotransferir")
const botaolimpar = document.querySelector("#botaolimpar")
const botaovoltar = document.querySelector("#botaovoltar")
const mudar = [...document.querySelectorAll(".marcado")]

nomes.forEach(nomes=>{nomes.setAttribute("class","naos")})
const naos = document.querySelectorAll(".naos")

caixa.appendChild(...naos)

nomes.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const name = evt.target
        name.setAttribute("class","marcado")
    })
    
})

botaolimpar.addEventListener("click",()=>{
    nomes.forEach(nomes =>{
    nomes.removeAttribute("class","marcado")
    nomes.setAttribute("class", "naos")})

})

botaotransferir.addEventListener("click",()=>{
    const n1=[...document.querySelectorAll(".marcado")]
    n1.map((el)=>{
        caixa2.appendChild(el)
        el.removeAttribute("class","marcado")
        el.setAttribute("class","naos")
    })
})
botaovoltar.addEventListener("click",()=>{
    const n2=[...document.querySelectorAll(".marcado")]
    n2.map((el)=>{
        caixa.appendChild(el)
        el.removeAttribute("class","marcado")
        el.setAttribute("class","naos")
    })
})



    






 







