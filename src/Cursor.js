// Cursor.js

import React, { useEffect } from 'react'

const Cursor = () => {
  useEffect(() => {
    const mousemove = (e) => {
      const cursor = document.querySelector('.cursor')
      const cursor2 = document.querySelector('.cursor2')
      if (cursor && cursor2) {
        cursor.style.cssText = cursor2.style.cssText =
          'left:' + e.clientX + 'px; top:' + e.clientY + 'px;'
      }
    }

    document.addEventListener('mousemove', mousemove)

    return () => {
      document.removeEventListener('mousemove', mousemove)
    }
  }, [])

  return (
    <>
      <div>
        <div className="fixed w-2 h-2 border border-solid bg-yellow-500  rounded-full left-0 top-0 pointer-events-auto transform -translate-x-1/2 -translate-y-1/2  duration-300 cursor"></div>
        <div className="fixed w-12 h-12  border-2 border-solid border-yellow-500 rounded-full left-0 top-0 pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 cursor2"></div>
      </div>
    </>
  )
}

export default Cursor
