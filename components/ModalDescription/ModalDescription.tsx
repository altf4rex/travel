'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/configureStore'
import styles from './ModalDescription.module.scss';

export default function ModalDescription() {
    const descriptionHeader = useSelector((state: RootState) => state.region.descriptionHeader)
    const descriptionText = useSelector((state: RootState) => state.region.descriptionText)

  return (
    <div className={styles.container}>
      <h4>{descriptionHeader}</h4>
      <p>{descriptionText}</p>
    </div>
  )
}
