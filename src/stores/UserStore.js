import { decorate, observable, action } from "mobx"

class UserStore {
  user = {}

  setUser(user) {
    this.user = user;
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