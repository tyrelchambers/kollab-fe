import { decorate, observable, action } from "mobx";

class ModalStore {
  isOpen = false
  render = ''

  setRender(comp) {
    this.render = comp
  }

  setIsOpen(open) {
    this.isOpen = open
  }
}

decorate(ModalStore, {
  isOpen: observable,
  render: observable,
  setIsOpen: action,
  setRender: action
})

export default new ModalStore();