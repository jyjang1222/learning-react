import React, {useState} from 'react'

function _0607_리스트() {
  let [content, setContent] = useState("");
  let [contentList, setContentList] = useState([]);

  const addContent = (v) => {
    const arr = [...contentList];
    arr.push(v);
    setContentList(contentList = [...arr]);
    console.log(contentList);
  }

  return (
    <>
      <input type="text"/>
      <button onClick={() => {addContent(content)}}>제출</button>
    </>
  )
}

export default _0607_리스트