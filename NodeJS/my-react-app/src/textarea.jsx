import { useState } from "react";


function Textarea()
{
    const[mytext,setMytext]=useState("");

        function update(e)
        {
            setMytext(e.target.value)
        }
    return(
        <>
        <form>
            <label>Write Text : </label>
            <input type='textarea' value={mytext} onChange={update}/>
            <p>Your have written : {mytext}</p>
        </form>
        </>
    );
}

export default Textarea;
