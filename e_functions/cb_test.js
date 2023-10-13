 function doTheLogging() {
  return 'stuff to log';
 }
 
 function logStuff(cb) {
  console.log(cb());
 }

 logStuff(doTheLogging);