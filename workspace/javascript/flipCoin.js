const flipCoin = () => {
  return ( 0 == Math.random(0,1) ? 'Head' : 'Tail' );
}

console.log(flipCoin());
