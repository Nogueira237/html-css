let normal = [...document.getElementsByTagName("td")]
normal.map((el)=>{
    el.className += 'normal'
})
normal.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const n1 = evt.target
        n1.setAttribute('class', 'selecionado')
    })
})







