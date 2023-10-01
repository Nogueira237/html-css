let h1 = document.getElementById("h1")
const b1 = document.getElementById("b1")
b1.addEventListener("click",()=>{
    h1.innerHTML = "MUDOU!"
    h1.addEventListener("mouseenter",()=>{
        h1.innerHTML = "Parágrafos e quebras de linha"
    })
})
