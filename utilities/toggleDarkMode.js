const toggleDarkMode = () => {
  const toggleThemeButton = document.querySelector('#theme-toggle');
  const themeName = document.querySelector('#theme-name');
  const prefersDarkScheme = matchMedia('(prefers-color-scheme: dark)').matches;
  const moonIcon = document.querySelector('.moon-icon');
  const sunIcon = document.querySelector('.sun-icon');
  let storagedDarkMode = localStorage.getItem('Dark Mode');

  const addDarkModeClass = () => {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  };
  const addLightModeClass = () => {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  };

  const displayColorSchemeName = (theme) => {
    themeName.textContent = theme;
  };

  const displaySunIcon = () => {
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  };
  const displayMoonIcon = () => {
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
  };

  const enableDarkMode = () => {
    localStorage.setItem('Dark Mode', 'enabled');
    addDarkModeClass();
    displaySunIcon();
    displayColorSchemeName('Light');
  };

  const disableDarkMode = () => {
    localStorage.setItem('Dark Mode', null);
    addLightModeClass();
    displayMoonIcon();
    displayColorSchemeName('Dark');
  };

  if (prefersDarkScheme) {
    localStorage.setItem('Dark Mode', 'enabled');
    displayColorSchemeName('Light');
    displaySunIcon();
  }

  toggleThemeButton.addEventListener('click', () => {
    storagedDarkMode = localStorage.getItem('Dark Mode');
    storagedDarkMode !== 'enabled' ? enableDarkMode() : disableDarkMode();
  });
};

export default toggleDarkMode;
