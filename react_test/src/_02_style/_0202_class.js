import React, { useEffect } from 'react'
import './_0202_class.css'

function _0202_class() {
  const init = () => {
    const contentList = document.querySelectorAll('._0202content')[1].style.backgroundColor = 'red';
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
        <div className="_0202content">
            <p>getElementsByClassName() 메서드1</p>
        </div>
        <div className="_0202content">
            <p>getElementsByClassName() 메서드2</p>
        </div>
    </>
  )
}

export default _0202_class