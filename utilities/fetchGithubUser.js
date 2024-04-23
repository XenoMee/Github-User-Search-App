import Github from './github.js';
import UI from './UI.js';

const fetchGithubUser = () => {
  const searchButton = document.querySelector('.search-btn');
  const github = new Github();
  const ui = new UI();

  github.getUser('octocat').then((data) => ui.showProfile(data.profile));

  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (ui.searchInput.value === '') {
      ui.showAlert('Enter a username!', 'not-found');
      return;
    }

    github.getUser(ui.searchInput.value).then((data) => {
      if (data.profile.message === 'Not Found') {
        ui.showAlert('No results', 'not-found');
        ui.showNotFound();
      } else ui.showProfile(data.profile);
    });

    ui.clearProfile();
    ui.searchInput.value = '';
  });
};

export default fetchGithubUser;
