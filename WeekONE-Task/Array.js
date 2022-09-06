//“I love algorithms but i think the ones here are too simple”
//Refer to number 3 above and write a function that takes the entire
// sentence as an input and returns an array with each of the words in the sentence as items of the array

//4. 


const algorithmsSentence = 'I love algorithms but i think the ones here are too simple'


const displayArray =()=>{
  const algorithmsArray = []

  algorithmsArray.push(algorithmsSentence)
  const algorithmsItems = algorithmsSentence.split(' ')

  // const algorithmsItems = algorithmsArray.map((items) => items.split(' '))

  console.log(algorithmsItems)
}

displayArray()







  