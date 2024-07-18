'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/configureStore'
import styles from './ModalDescription.module.scss';

export default function ModalDescription() {
    const descriptionHeader = useSelector((state: RootState) => state.region.data.descriptionHeader)
    const descriptionText = useSelector((state: RootState) => state.region.data.descriptionText)

  return (
    <div className={styles.container} data-testid="modal-description">
      <h4>{descriptionHeader}</h4>
      <p>{descriptionText}</p>
    </div>
  )
}
