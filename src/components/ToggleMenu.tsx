import { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi/index'
import styles from '../styles/toggleMenu.module.css'

export function ToggleMenu () {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <button
      className={`${styles.btn} ${isOpen ? 'active' : ''}`}
      onClick={handleClick}
    >
      {isOpen ? <BiX /> : <BiMenu />}
    </button>
  )
}
