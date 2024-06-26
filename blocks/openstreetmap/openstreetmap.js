export default function decorate(block) {
  const latlon = block.textContent.match(/-?\d+\.\d+/g);
  const lonMin = parseFloat(latlon[0]);
  const lonMax = (lonMin + 0.1);
  const latMin = parseFloat(latlon[1]);
  const latMax = (latMin + 0.1);

  block.innerHTML = `<iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=${lonMin}%2C${latMin}%2C${lonMax}%2C${latMax}&amp;layer=mapnik"></iframe>`;
}
