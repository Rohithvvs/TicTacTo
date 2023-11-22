import React, { useState } from 'react'


function Form() {
    const [text, setText] = useState()
    const [names, setNames] = useState()

    // const handleClick = ()=>{
    //   console.log(text, names)
    // }

  return (
    <div>

    <div>
        <label  >  first name</label>
        <input type="text" value={text || ""}  onChange={(e)=>setText(e.target.value)}  />
    </div>
    <div>
        <label  > Last name</label>
        <input type="text" value={names || ""}   onChange={(e)=> setNames(e.target.value)} />
    </div>
    <button onClick={()=>  console.log(text, names)  }> submit</button>
    </div>
  )
}

export default Form