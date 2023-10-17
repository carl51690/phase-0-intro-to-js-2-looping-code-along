function writeCards(Cards){
  const message = []
  for (let a = 0; a < Cards.length; a++){
    message.push(`Thank you, ${Cards[a]}, for the wonderful surprise gift!`);
  }
  return message
}

function countDown(num){
while (num >= 0) {
  console.log(num);
  num--;
}
}

