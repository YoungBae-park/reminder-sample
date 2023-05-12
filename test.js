var now = new Date();
var beforeDateTime =  new Date('2023-05-11T16:30:00')
var deffer =  now - beforeDateTime;
var day = deffer/(1000*3600*24);
var hour = ((deffer%(1000*3600*24))/(1000*3600));
console.log('경과시간 : '+day+'일 '+hour+'시')





formatDefferDateTime
console.log(formatDefferDateTime);