import { decorate, observable, action } from "mobx"

class UserStore {
  user = null

  setUser(user) {
    this.user = user;
  }

  getUser() {
    console.log(this.user)
    return this.user;
  }
}

decorate(UserStore, {
  user: observable,
  setUser: action
})

export default new UserStore()