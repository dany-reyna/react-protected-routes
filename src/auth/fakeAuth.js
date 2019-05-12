const fakeAuth = {
  isAuthenticated: false,
  signIn(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signOut(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export default fakeAuth;
