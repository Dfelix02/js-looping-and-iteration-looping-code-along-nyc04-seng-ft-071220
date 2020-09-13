function writeCards(names,event){
  for(let i=0;i<names.length;i++){
    console.log (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    /names[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`; 
  }
  return names;
}



function countDown(num){
  let i = 0
  while(i<=num){
    console.log(num--)
  }
}