export default function decorate(block) {

// Get the text content of the body
    const text = document.body.innerText || document.body.textContent;

// Use a regular expression to match words
    const words = text.match(/\b\w+\b/g);

// Count the number of words
    const wordCount = words ? words.length : 0;

    block.textContent = 'There are ' + wordCount + ' Words on this page.';

}