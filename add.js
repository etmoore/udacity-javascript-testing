function add(x, y) {
  var result;
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Params must be a number.');
  }

 var result = x + y;
 if (parseInt(result) !== result) {
   result = parseFloat(result.toFixed(1));
 }

 return result;
}
