// Deterministic vector artwork; no tracking, autoplay or external scripts.
const lines = document.getElementById('signal-lines');
for (let row = 0; row < 66; row++) {
  let d = '';
  for (let col = 0; col <= 150; col++) {
    const x = 45 + col * 3.4;
    const position = (x - 300) / 210;
    const envelope = Math.exp(-position * position * 3.5);
    const amplitude = Math.sin(col / 10 + row / 8) * 39 + Math.cos(col / 19 - row / 11) * 30;
    const y = 105 + row * 4.8 + amplitude * envelope;
    d += `${col ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)} `;
  }
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  path.setAttribute('opacity', String(.4 + Math.sin(row / 66 * Math.PI) * .6));
  lines.appendChild(path);
}
document.getElementById('year').textContent = new Date().getFullYear();
