


const express= require("express");
const bodyParser = require("body-parser")
const fetch= require("node-fetch")
const app= new express();


app.get("/accreditamento", (req,res) => {
    res.json({
        nome:"n",
        cognome:"m"
    })
})



app.use(bodyParser.json())
app.post("/somma-dispari",(req,res)=>{
    const a= req.body.numbers;
    console.log(a);
    let s=0;
    a.forEach(el=> {
        if(el%2!==0){

        s+=el}
    })
    res.json({
        sum:s
    })
})


app.use(bodyParser.json())
app.put("/lista-parole-b",(req,res)=>{
    const a= req.body.words;
    console.log(a);
    let counter=0
    let s=[];
    a.forEach(el=> {
        if(el.length<4){
        counter+=1
        s.push(el)
        
    }
    
    })
    res.json({
        count:counter,
        words:s.join(" ")
    })
})

app.post("/comments",(req,res)=>{
    const id=req.body.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response=>response.json())
        .then(data=>{
            const d=data.filter(p=> 
                )
            const body=p.bodyconst parole=body.split(" ")
            const n=parole.length
            if(n%2===1) {
                return false
            }else {
                return true
            }
        })
        const ids=d.map(p=>p.id)
        res.json ({
            ids:ids
        })
})


app.use(bodyParser.json())
app.post("/comments",(req,res)=>{
    const a= req.body.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${a}/comments`)
        .then(response=>response.json())
        .then(data=>{res.json({count:data[0].body.split(" ").length})

        })
})




    console.log(risultato)
    fetch("http://192.168.1.231:8080/esercizi/1" , {
        method :"post",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({data: risultato})
    })
})