import React, { useState } from 'react'

function Stylechanger() {
    let changer= {
        title: "CNC Web World",
        CSS: {
            color: "red",
            border: "2px solid green",
            fontSize: "55px"
        }
        
    }

    let [fontstyle,setfontstyle] =useState(changer);

    function newstyle() {
        setfontstyle({
            title: "Programming site",
            CSS: {
                color: "blue",
                border: "2px dotted yellow",
                fontSize: "40px"
            }
        })
    }
  return (
    <>
        <h1 className='text-center'>Stylechanger</h1>
        <h2 style={fontstyle.CSS}>{fontstyle.title}</h2>
        <button onClick={newstyle}>Click me</button>
    </>
  )
}

export default Stylechanger