const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync('./Home.html', 'utf-8')
const aboutPage = fs.readFileSync('./About.html', 'utf-8')
const contactPage = fs.readFileSync('./Contact.html', 'utf-8')



const routeServer = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.end(homePage)
  }
  else if(req.url === '/About'){
    res.end(aboutPage)
  } 
  else if(req.url === '/Contact'){
    res.end(contactPage)
  }else{
    res.end('404')
  }

})

routeServer.listen(4000, console.log('listening'))