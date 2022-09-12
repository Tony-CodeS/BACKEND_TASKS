const fs = require('fs')
// console.log(fs)
const readFile =   fs.readFileSync('./myText.txt', 'utf-8') 
const readFileMessage = "reading your file, please do not refresh this page"
const writeFileMessage = "Successfully written your file"

const readAndWriteFile =()=>{ 
try{
readFile
}
catch(error){
    if(error){
        console.log(error)
    } 
}
console.log(readFileMessage);

fs.writeFileSync('./writeText.txt', readFile, 'utf-8', (error) =>{
    if(error){
        console.log(error)
    }
       },
console.log(writeFileMessage))

}

readAndWriteFile()