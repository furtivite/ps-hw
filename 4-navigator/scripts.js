/*
  Написать код, рассчитывающий дистанцию от объекта;
*/

const addressLat = 14;
const addressLong = 14;
const positionLat = 7;
const positionLong = 7;

/*
  Расстояние между двумя точками равно квадратному корню из суммы квадратов 
  разностей координат по каждой оси. 
*/

const distanceLat = 
  (addressLat > positionLat) 
  ? addressLat - positionLat 
  : positionLat - addressLat;
const distanceLong = 
  (addressLong > positionLong) 
  ? addressLong - positionLong 
  : positionLong - addressLong;

const result = Math.sqrt(Math.pow(distanceLat, 2) + Math.pow(distanceLong, 2));
console.log(result);