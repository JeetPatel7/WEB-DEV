import { useState } from "react";

function Submit()
{
    const[name,setName]=useState("");

    function update(e){
        setName(e.target.value);
    }

    function popup(e)
    {
        e.preventDefault();
        alert(name)
    }
    return(
        
        <>
        <form onSubmit={popup}>
            <label>Name : </label>
            <input type='text' value = {name} onChange={update}/>

            <input type='submit'/>
        </form>
        </>
    );

}

export default Submit;