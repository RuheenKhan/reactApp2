import React, { useState } from 'react'

function Fontchanger() {
    let [fsize,setfsize]=useState("20");
    function getValue(e) {
        // console.log(e.value);
        let value=e.target.value+ "px";
        setfsize(value);
    }

    function getColor(e) {
        // console.log(e.target.value);
        let color=e.target.value;
        setfsize(color);
    }
  return (
    <>
        <hr />
        <br></br>
        <h1 className='text-center'>Font Size Changer</h1>
        <h2 style={{fontSize:fsize, color:fsize}}>CNC Web World</h2>
        <input type="range" name="range" onChange={getValue} step={5} />
        <input type="color" name="color" onChange={getColor} />
    </>
  )
}

export default Fontchanger