import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/configureStore'

export default function () {
    const activeRegion = useSelector((state: RootState) => state.region.region)
    const dispatch = useDispatch()
  return (
    <div>
    
    </div>
  )
}
