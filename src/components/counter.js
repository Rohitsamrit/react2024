import { useState } from "react";


function Counter() {
    const [number,setNumber]=useState(0);
    function eventclick(e){

        e.stopPropagation();
        setNumber(number=>number+1);
        console.log(number)
    }
  return( <>
    <h1>{number}</h1>
    <button onClick={eventclick}>Add</button>
  </>)
}
export default  Counter;
