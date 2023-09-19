import React from 'react'
import { useTheme } from '../customHook/themeContext'

const Navbar = () => {
    const theme = useTheme()
  return (
    <div style={{height : "60px" , background : theme.primaryColor}} >
        <h1>Navbar...</h1>
    </div>
  )
}

export default Navbar