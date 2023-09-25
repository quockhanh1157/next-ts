import styles from '../../styles/modal.module.scss'
import React from "react";

type Props = {
  isVisible: boolean;
  children: React.ReactNode
}
const Modal = (props: Props) => {
  const {isVisible, children} = props
  return (
    <>
      {isVisible && <div className={styles.modal}>
          <div className={styles.modal_background}></div>
          <div className={styles.modal_content}>
              <div className={styles.modal_child}>
                {children}
              </div>
          </div>
      </div>
      }
    </>
  )
}

export default Modal