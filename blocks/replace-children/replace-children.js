export default function decorate(block) {
  // Create a new H2 element with some text
  const H2 = document.createElement('H2');
  H2.appendChild(document.createTextNode('H2 element that replaces the block content.'));
  // Replace the children of the block with the new H2 element
  block.replaceChildren(H2);
}
