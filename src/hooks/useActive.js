import { useState } from 'react'

export const useActive = () => {
  const [isActive, setIsActive] = useState(false)

  const activate = () => {
    setIsActive(true)
  }

  const deactivate = () => {
    setIsActive(false)
  }

  const toggle = () => {
    setIsActive(!isActive)
  }

  return {
    activate,
    deactivate,
    toggle,
    isActive,
  }
}
