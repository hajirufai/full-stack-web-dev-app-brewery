/**
 * Sets the src attribute of an image within a dice element.
 * 
 * @param {number} i - The index of the dice element to manipulate. Uses zero-based indexing.
 *                     For example, pass 0 to manipulate the first dice element.
 */
function setImgSrcAttribute(i) {
    /**
     * Generates a random number between 1 and 6 (inclusive) and constructs a new src attribute value.
     * 
     * @type {number} randomNumber - A randomly generated integer between 1 and 6.
     * @type {string} newSrc - The new src attribute value for the image element.
     */
    var randomNumber = Math.floor(6 * Math.random()) + 1;
    var newSrc = 'images/dice' + randomNumber + '.png';

    // Selects the dice element at the specified index and sets its image src attribute to the new value.
    document.querySelectorAll('.dice')[i].querySelector('img').setAttribute('src', newSrc);
}

// Example usage: Set the image src attribute for the first and second dice elements.
setImgSrcAttribute(0);
setImgSrcAttribute(1);
