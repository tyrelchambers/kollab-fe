import { decorate, observable, action } from "mobx"

class AutocompleteStore {
  list = []

  setList(list) {
    this.list = list
  }
}

decorate(AutocompleteStore, {
  list: observable,
  setList: action
})

export default new AutocompleteStore()