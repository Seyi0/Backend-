const fs = require('fs')

// check if folder already exist
// create a new folder if it doesn't exist........


try{
    if(!fs.existsSync(`ios`)){
        fs.mkdirSync(`ios`)
        console.log(`successful`)
    }
} catch(error){
    console.log(error)
}