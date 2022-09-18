const fs = require('fs')

const data =    `I'm an investor`
//sync
fs.writeFileSync('./soft/index.txt',data,(error)=>{

    if(error){
        console.log(error)
    }
    console.log(`done`)
})

// async


let data1 = `something fishy`

fs.writeFile('./soft/text.txt', data1, error =>{
    try{
        if(error){
            console.log(error)
        }
        console.log(`successful`)
    }catch (error){
        console.log(error)
    }
})