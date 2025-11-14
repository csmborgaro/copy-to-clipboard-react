/**
 * Creates a temporary input element in the DOM to copy text to clipboard
 * @param {string} text_to_copy - Text to be copied to clipboard
 * @param {boolean} [alert_or_not=false] - Whether to show alert after copying
 */
exports.copyText = function (text_to_copy, alert_or_not = false) {
    if (!text_to_copy) return;

    /** @type {HTMLTextAreaElement} */
    const tempTextarea = document.createElement('textarea');
    document.body.appendChild(tempTextarea);
    tempTextarea.value = text_to_copy;
    tempTextarea.select();

    document.execCommand('copy');
    document.body.removeChild(tempTextarea);

    if (alert_or_not) {
        const alertText = text_to_copy.length > 30 
            ? text_to_copy.substring(0, 30) + '...' 
            : text_to_copy;
        alert("Text copied in clipboard:\n" + alertText);
    }
};
