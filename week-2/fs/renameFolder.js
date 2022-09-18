const fs = require('fs')


fs.rename('./ios','./soft',(error)=>{

    if(error){
        console.log(error)
    }
    console.log(`done`)
})