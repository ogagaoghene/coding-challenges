const checkCapacity = ( capacity, attendees = 0 ) => {
  if ( attendees < capacity ) {
    return 'There are still Tickets available.';
  }
  return 'This event is sold out.'
}

const venues = {
  'Catina': [100, 20],
  'Dorsia': [74,74],
  'The Max': [98, 100],
  'MacLaren\'s': [53, 127],
  'The Banana Stand': [2,0]
}

for (var key in venues) {
  var value = venues[key];
  console.log(key, value, checkCapacity(value[0], value[1]));
}