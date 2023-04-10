var size = 23;
var szint = 9;

for (var k = 0; k < szint; k = k + 1) {
  for (var i = szint - k; i > 0; i = i - 1) {
    var j = szint - i;
    c.fillRect(j*size+ k*size, i*size+ k*size, size, size);
  }
}
