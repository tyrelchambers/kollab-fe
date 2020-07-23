import { decorate, observable, action } from "mobx"

class UserStore {
  user = null

  setUser(user) {
    this.user = user;
  }

  nickname = () => {
    if (this.user.useUsername) {
      return this.user.username
    } else {
      return `${this.user.firstName} ${this.user.lastName}`
    }
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