const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (strings) => {
  return tutorials.map(val => {
    const wArr = val.split(" ")
    const tutorial =
    wArr.map( wArr => wArr.charAt(0).toUpperCase() + wArr.slice(1) )
    const finArr = tutorial.join(' ')

  //   return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
  // })
  return finArr
  })
}

  
//   let wArr= stLowerCase.split(" ").map(function(word) {
//       return currentValue[0].toUpperCase() + word.substring(1);
//   });

//   return wArr.join(" ");
// }



// let titleCased = (tutorial1)
// {tutorials.map(val => 
//   val.slice(1).toUpperCase() ===val.slice(1) ? val[0].toUpperCase()+ val.slice(1).toLowerCase() : val[0].toUpperCase() + val.slice(1));
// return titleCased}


// function titleCase(strings){ 
//   let strings = tutorials.map(function(val){
//     tutorials.split(' ')
//     return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    
     

//   })
  



