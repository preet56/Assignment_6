document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById('root');

    // Create textarea
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Enter text here...';

    // Create submit button
    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.onclick = processText;

    // Append elements to the root div
    root.appendChild(textarea);
    root.appendChild(button);

    function processText() {
        const text = textarea.value;
        const words = text.split(/\s+/);
        const frequency = {};

        // Count the frequency of each word
        words.forEach(word => {
            if (word) {
                frequency[word] = (frequency[word] || 0) + 1;
            }
        });

        // Log the frequency object
        console.log(frequency);

        // Create and display the frequency table
        displayFrequencyTable(frequency);
    }

    function displayFrequencyTable(frequency) {
        const sorted = Object.entries(frequency)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .slice(0, 5);

        // Clear previous table if any
        const oldTable = root.querySelector('table');
        if (oldTable) root.removeChild(oldTable);

        // Create new table
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        headerRow.insertCell().textContent = 'Word';
        headerRow.insertCell().textContent = 'Frequency';

        sorted.forEach(([word, freq]) => {
            const row = table.insertRow();
            row.insertCell().textContent = word;
            row.insertCell().textContent = freq;
        });

        root.appendChild(table);
    }
});
