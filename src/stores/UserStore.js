import { decorate, observable, action } from "mobx"

class UserStore {
  user = null

  setUser(user) {
    this.user = user;
  }

  addAccessToken(token) {
    this.user = {...this.user, token}
  }

  getUser() {
    return this.user;
  }
}

decorate(UserStore, {
  user: observable,
  setUser: action
})

export default new UserStore()