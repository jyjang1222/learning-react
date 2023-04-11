import React, { useEffect, useRef } from 'react'
import './_0311_list.css'

function _0311_list() {
  let isShow = false;
  const btn = useRef(null);
  const menu = useRef(null);

  const init = () => {
    btn.current.addEventListener('click', displayList);
  }

  const displayList = () => {
    if (isShow === false) {
      menu.current.style.display = 'block';
      btn.current.textContent = '목차 닫기'
      isShow = true;
    } else {
      menu.current.style.display = 'none';
      btn.current.textContent = '목차 보기'
      isShow = false;
    }
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <>
      <a href="#" ref={btn}>목차 보기</a>
      <hr></hr>
      <ul ref={menu} id="menu">
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
        <li>메뉴4</li>
      </ul>
    </>
  )
}

export default _0311_list