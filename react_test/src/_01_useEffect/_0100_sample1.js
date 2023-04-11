import React, { useEffect } from 'react'

function _0100_sample1() {
  function init() {
    console.log("test")
  }
  // window.onload = () => {
  //   init();
  // }

  useEffect(() => {
    init()
  }, []);

  return (
    <React.Fragment>
      <div>_0100_sample1</div>
    </React.Fragment>
  )
}

export default _0100_sample1