import React, { useEffect } from 'react'

function _0101_id() {
    const init = () => {
        const element = document.getElementById("content");
        console.log(element.innerText);    
        document.getElementById("target").innerText = "Hello, JavaScript";
        
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <>
            <p id="content">getElementById() 메서드</p>
            <p id="target"></p>
            <hr></hr>
        </>
    )
}

export default _0101_id