import React, { useEffect } from 'react'

function _0101_class() {
  const init = () => {
    let collection = document.getElementsByClassName("content")[0];
    console.log(collection.innerText);    
    document.getElementsByClassName("content")[1].innerText = "Hello, JavaScript";
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <p class="content">getElementsByClassName() 메서드1</p>
      <p class="content">getElementsByClassName() 메서드2</p>
      <hr></hr>
    </>
  )
}

export default _0101_class