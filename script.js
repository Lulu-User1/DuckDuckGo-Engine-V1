// You can add JavaScript for any interactive elements here if needed.
// For this static design, it might not be necessary initially.
const switchInput = document.querySelector('.switch input');
const onionizeText = document.querySelector('.onionize-text');

if (switchInput) {
    switchInput.addEventListener('change', function() {
        if (this.checked) {
            onionizeText.style.color = '#fff'; // Highlight when checked
        } else {
            onionizeText.style.color = '#ccc'; // Revert when unchecked
        }
        // In a real application, you would handle the "Onionize" functionality here.
    });
}
