const fs = require('fs')

//Synchronous
    try{
const data = fs.readFileSync('./soft/index.txt', `utf-8`)
    console.log(data)
    } catch(error){
        console.log(error)
    }

    //async
    fs.readFile(`./soft/text.txt`, `utf-8`, (error,data)=>{
        if(error){
            console.log(error)
        }
        console.log(data)
    })