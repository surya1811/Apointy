import React, {Component,useLocation} from "react";

import { useState } from "react";



const Details = (props) =>
  {
const [tobedone,setTobedone]=useState(false);
  const [newname,setNewname]=useState('');
  const [newdesc,setNewdesc]=useState('');
  const [name, setName] = useState(props.location.state.name);
  const [id, setId] = useState(props.location.state.id);
  const [url, setUrl] = useState(props.location.state.url);
  const [desc, setDesc] = useState(props.location.state.desc);
  
 function update(e)
 {
e.preventDefault()
setName(newname);
setDesc(newdesc);

 }
 
const hiii=()=>
{
  setTobedone(!tobedone);
}
  return (
   
     
       <div >
         <h1>picture dekhlo</h1>
      <div>
        {name}
        {url}
        {id}
        {desc}
      </div>
     
        <button onClick={hiii}>Doyouwant</button>
       
        {tobedone && (
        <form  onSubmit={update}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="name" 
                            value={newname}
                            onChange={(e)=> setNewname(e.target.value)}
                     
                           ></input>
                        <label>Desc</label>
                        <input 
                            type="text" 
                            name="desc" 
                            placeholder="desc"
                            value={newdesc}
                            onChange={(e)=> setNewdesc(e.target.value)}
                     
                         ></input>
                    </div>
                    <button className="ui button blue">Edit</button>
                </form>
        )}
                </div>
   

  );
  
};

export default Details;
