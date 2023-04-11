import React, {useState} from 'react'

function _0604_array() {
  let [Arr1, setArr1] = useState([0,1,2]);
  let [Arr2, setArr2] = useState([100,200,300]);

  const arrAdd1 = (num) => {
    const arr = [...Arr1]
    arr.push(num)
    // console.log(Arr1);
    setArr1(Arr1 = arr);
  }
  const arrAdd2 = (num) => {
    const arr = [...Arr2];
    arr.push(num);
    setArr2(Arr2 = [...arr]);
  }

  return (
    <>
      <button onClick={(e) => {arrAdd1(40)}}>배열증가1</button>
      <h2>{Arr1}</h2>

      <hr></hr>

      <button onClick={(e) => {arrAdd2(400)}}>배열증가2</button>
      <h2>{Arr2}</h2>

      <hr />
      <h2>반복문사용법</h2>
      {Arr2.map((v, i) => {
        return <p>index : {i}, value : {v}</p>
      })}
    </>
  )
}

export default _0604_array