class Github {
  constructor() {
    this.client_id = 'd09427061eb4e8a1022f';
  }

  async getUser(user) {
    const profileRes = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}`
    );
    const profile = await profileRes.json();

    return { profile };
  }
}
