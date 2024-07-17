document.getElementById('commaserateButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let delimiter = document.getElementById('delimiter').value;
    let resultText = formatText(inputText, delimiter);
    document.getElementById('resultText').value = resultText;
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('resultText').value = '';
});

function formatText(text, delimiter) {
    // Split the text by the chosen delimiter and join with newline characters
    return text.split(delimiter).join('\n');
}
