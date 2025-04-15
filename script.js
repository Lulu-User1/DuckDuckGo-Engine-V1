const searchBarContainer = document.querySelector('.search-bar-container');
const searchInput = document.querySelector('.search-input');

// Focus animation
searchInput.addEventListener('focus', () => {
    searchBarContainer.classList.add('focused');
});

searchInput.addEventListener('blur', () => {
    searchBarContainer.classList.remove('focused');
});

// Click animation
searchBarContainer.addEventListener('mousedown', () => {
    searchBarContainer.classList.add('clicked');
});

searchBarContainer.addEventListener('mouseup', () => {
    searchBarContainer.classList.remove('clicked');
});

// Optional: Remove the 'clicked' class after the animation completes
searchBarContainer.addEventListener('animationend', () => {
    searchBarContainer.classList.remove('clicked');
});
