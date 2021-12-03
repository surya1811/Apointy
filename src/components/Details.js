import React, {Component,useLocation} from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


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
   
    
         <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
         <h1 style ={{textAlign:"center"}}>Welcome to Details Page</h1>
        </Typography>
        <Typography variant="h3" component="div">
        <label>
        <Box sx={{ color: 'success.main' }}>
          Title :
          {name}
          </Box>
          </label> 
        </Typography >
        <Typography variant="h4" component="div">
        <label>Description</label>{desc}
        </Typography>
        <Typography variant="h5" component="div">
        <label>Url :</label> {url}
        </Typography>
       
        </CardContent>
        <Box textAlign='center'>
  <Button variant='contained'
   onClick={hiii}>Updation
  </Button>
</Box>
       
        {tobedone && (
        <form  onSubmit={update}>
                    <Box textAlign='center'>
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="name" 
                            value={newname}
                            onChange={(e)=> setNewname(e.target.value)}
                     
                           ></input></Box>
                           <br/>
                           <Box textAlign='center'>
                        <label>Desc</label>
                        <input 
                            type="text" 
                            name="desc" 
                            placeholder="desc"
                            value={newdesc}
                            onChange={(e)=> setNewdesc(e.target.value)}
                     
                         ></input>
                </Box>
                <Box textAlign='center'>
            <button variant='contained'>
                  Edit</button>
                  </Box>
                </form>
        )}
                </Card>
   

  );
  
};

export default Details;
