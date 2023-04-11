import React, { useEffect, useRef } from 'react'

function _0313_checkbox() {
  const btnCheckAll = useRef(null);
  const btnCheckList = useRef([]);
  // const checkList2 = useRef({});

  const init = () => {
    btnCheckAll.current.addEventListener('click', checkAll);
    for (const input of btnCheckList.current) {
      input.addEventListener('click', checkInputState);
    }
  }
  const checkAll = () => {
    if (btnCheckAll.current.checked) {
      for (const input of btnCheckList.current) {
        input.checked = true;
      }
      // for (let i = 0; i < btnCheckList.current.length; i++) {
      //   btnCheckList.current[i].checked = true;
      // }
    } else {
      for (const input of btnCheckList.current) {
        input.checked = false;
      }
    }
  }
  const checkInputState = () => {
    const chkListLen = btnCheckList.current.length;
    let count = 0;
    for (const input of btnCheckList.current) {
      if (input.checked) {count += 1}
    }
    if (count === chkListLen) {
      btnCheckAll.current.checked = true;
    } 
    if (count === 0) {
      btnCheckAll.current.checked = false;
    }
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <>
      <input type="checkbox" ref={btnCheckAll}/>전체선택 <br />

      <input type="checkbox" className="subject" ref={(e) => btnCheckList.current[0] = e}></input>수학
      <input type="checkbox" className="subject" ref={(e) => btnCheckList.current[1] = e}/>영어
      <input type="checkbox" className="subject" ref={(e) => btnCheckList.current[2] = e}/>국어
    </>
  )
}

export default _0313_checkbox