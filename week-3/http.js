const http = require('http')

// console.log(http)

const server = http.createServer((req,res)=>{
   if( `/`){
    res.end(`home`)
   }
   else if(`/about`){
    res.end(`about`)
   }
   else{res.end(`error`)}
})

//HomePage
//About US
// Contact US
//Error page

server.listen(5000, ()=>{
    // console.log('server is running')
})