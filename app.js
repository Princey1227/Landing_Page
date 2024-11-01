const toggleBtn = document.querySelector('.toggle-btn');
const bigWrapper = document.querySelector('.big-wrapper');

// List of themes
const themes = ['light', 'dark', 'theme1', 'theme2', 'theme3'];

// Load the saved theme from local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme && themes.includes(currentTheme)) {
    bigWrapper.classList.add(currentTheme);
}

// Function to change theme
const changeTheme = () => {
    let currentThemeIndex = themes.indexOf(bigWrapper.classList[1]);
    let nextThemeIndex = (currentThemeIndex + 1) % themes.length;

    // Remove the current theme class
    bigWrapper.classList.remove(themes[currentThemeIndex]);

    // Add the next theme class
    bigWrapper.classList.add(themes[nextThemeIndex]);

    // Set the background color based on the next theme
    bigWrapper.style.backgroundColor = getComputedStyle(bigWrapper).getPropertyValue('--backgroundColor');

    // Save the new theme in local storage
    localStorage.setItem('theme', themes[nextThemeIndex]);
};

// Set initial background color
bigWrapper.style.backgroundColor = getComputedStyle(bigWrapper).getPropertyValue('--backgroundColor');

// Event listener for toggle button
toggleBtn.addEventListener('click', changeTheme);
