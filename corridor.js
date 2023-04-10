function line (x, y, x2, y2) {
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(x2, y2);
  c.stroke();
}

var koz = 2;

for (var i = 0; i < 400; i = i + koz) {
  line (i, 0, 400-i, 300);
}
for (var i = 0; i < 300; i = i + koz) {
  line (0, 300-i, 400, i);
}
