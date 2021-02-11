const reqData = ["ANIMALE","CUCCIA","TUCCHE","KAT"]
let risultato = []
reqData.forEach(e => {
    let x= e.length
    if(e[x-1]==="E") {
        let b=e.toLowerCase()
        risultato.push(b)
    }
})
console.log(risultato)