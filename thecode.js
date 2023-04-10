var size = 20;

function sor (y, szam){
  var ism = szam;
  var koz = (400-size*ism)/(ism-1);
  for (var i = 0; i < ism; i = i + 1) {
    c.fillRect(i * (size + koz), y, size, size);
  }
}

var szint = 17;

for (var k = 0; k < szint-2; k= k +1) {
  sor (k*size, szint-k);
}
