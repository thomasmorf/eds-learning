export default function decorate(block) {
  const table = document.createElement('table');
  const tr = document.createElement('tr');
  table.appendChild(tr);
  [...block.firstElementChild.children].forEach((col) => {
    const divContent = col.textContent;
    const td = document.createElement('td');
    td.textContent = divContent;
    col.replaceChildren(td);
    tr.appendChild(td);
  });
  block.replaceChildren(table);
}
