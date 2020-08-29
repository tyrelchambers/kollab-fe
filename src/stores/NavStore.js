import {
  decorate,
  observable,
  action
} from "mobx";

class NavStore {
  isOpen = false;

  setIsOpen(bool) {
    this.isOpen = bool;
  }
}

decorate(NavStore, {
  isOpen: observable,
  setIsOpen: action
})
export default new NavStore();