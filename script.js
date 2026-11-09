// Decorative, deterministic signal linework. No audio or tracking.
const lines = document.getElementById('signal-lines');
if (lines) {
  for (let row = 0; row < 12; row++) {
    let d = '';
    for (let x = 0; x <= 1200; x += 4) {
      const envelope = Math.sin(x / 1200 * Math.PI) ** 2;
      const y = 28 + row * 10 + Math.sin(x / 52 + row * .27) * 23 * envelope;
      d += `${x ? 'L' : 'M'}${x},${y.toFixed(2)} `;
    }
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('opacity', String(.28 + row / 18));
    lines.appendChild(path);
  }
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
