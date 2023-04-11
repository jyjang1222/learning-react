import React, { useEffect, useRef } from 'react'

function _0403_append() {
  const list = useRef(null);
  const stList = [
    {"name":"Hong", "age":21},
    {"name":"Kim", "age":22},
    {"name":"Park", "age":23}
  ];
  
  const addStudentToList = () => {
    for (const student of stList) {
      const li = document.createElement('li');
      li.textContent = `이름: ${student.name} 나이: ${student.age}`
      list.current.appendChild(li);
    }
  }
  
  const drawColor = () => {
    const studentList = document.querySelectorAll('li');
    for (let i = 0; i < studentList.length; i+=2) {
      studentList[i].style.color = 'dodgerblue';
    }
    // list.current.children[1].style.color = 'dodgerblue';
  }

  const init = () => {
    addStudentToList();
    drawColor();
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <h4>학생 명단</h4>
      <ul ref={list}></ul>
    </>
  )
}

export default _0403_append