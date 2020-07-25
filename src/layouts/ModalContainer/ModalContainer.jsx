import React from 'react'
import './ModalContainer.css'
import { inject, observer } from 'mobx-react'

const ModalContainer = ({ModalStore}) => {
  if (ModalStore.isOpen) {
    return (
      <div className="modal-wrapper">
        <div className="modal-content">
          <div className="close-modal" onClick={() => {
            ModalStore.setIsOpen(false)
          }}>
            <i className="fas fa-times"></i>
          </div>

          {ModalStore.render}
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default inject("ModalStore")(observer(ModalContainer))
