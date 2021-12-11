import React, {Component,useLocation} from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  "./Req.css";


const Details = (props) =>
  {
const [tobedone,setTobedone]=useState(false);
  const [newname,setNewname]=useState('');
  const [newdesc,setNewdesc]=useState('');
  const [name, setName] = useState(props.location.state.name);
  const [id, setId] = useState(props.location.state.id);
  const [url, setUrl] = useState(props.location.state.url);
  const [desc, setDesc] = useState(props.location.state.desc);
  const [naow,setNaow] = useState(props.location.state.naow);
  const [crea,setCrea] = useState(props.location.state.crea);
  const [iss, setIss] = useState(props.location.state.iss);
  const [coun,setCoun] = useState(props.location.state.cou);
  // const [reason,setReason] = useState(props.location.state.over);
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
        <Typography sx={{ fontSize: 24 }} color="success.main" gutterBottom>
         <h1 style ={{textAlign:"center"}}>Welcome to Details Page</h1>
        </Typography>
        <br />
        <Typography variant="h3" component="div">
        <label>
        <Box sx={{ color: 'text.primary' }} style ={{textAlign:"center"}}>
          <p style ={{fontFamily : "timesNewRoman"}}> Title :
          {name}</p>
         
          </Box>
          </label> 
        </Typography >

        <Typography variant="h4" component="div">
        <label>
        <Box sx={{ color: 'error.main' }} style ={{textAlign:"center"}}>
        <p style ={{fontFamily : "Bahnschrift Condensed"}}> Name With Owner : 
          {naow}</p>
          </Box>
          </label> 
        </Typography >
        <Typography variant="h4" component="div">
        <label>
        <Box sx={{ color: 'text.secondary' }} style ={{textAlign:"center"}}>
        <p style ={{fontFamily : "Bahnschrift Condensed"}}> Description : {desc}</p>
         
          </Box>
          </label> 
        </Typography >
        <Typography variant="h4" component="div">
        <label>
        <Box sx={{ color: 'success.main' }} style ={{textAlign:"center"}}>
        <p style ={{fontFamily : "Bahnschrift Condensed"}}>Total Repositories : {coun}</p>
         
          </Box>
          </label> 
        </Typography >
        <Typography variant="h4" component="div">
        <label>
        <Box sx={{ color: 'info.main' }} style ={{textAlign:"center"}}>
        <p style ={ {fontFamily : "Bahnschrift Condensed"}}> Created Date : 
          {crea}</p>
         
          </Box>
          </label> 
        </Typography >
        <Typography variant="h4" component="div">
        <label>
        <Box sx={{ color: 'warning.main' }} style ={{textAlign:"center"}}>
        <p style ={{fontFamily : "Bahnschrift Condensed"}}>Total Issues Count : {iss}</p>
         
          </Box>
          </label> 
        </Typography >
       
     
       
        <Typography variant="h4" component="div">
        <label>
        <Box sx={{ color: 'secondary.main' }} style ={{textAlign:"center"}}>
        <i style ={{fontFamily : "timesNewRoman"}}>Url : {url}</i>
         
          </Box>
          </label> 
        </Typography >
       
       
       
        </CardContent>
        <Box textAlign='center'>
  <Button variant='contained'
   onClick={hiii}>Click for Updation
  </Button>
</Box>
       
        {tobedone && (
        <form  onSubmit={update}>
                    <Box textAlign='center'>
                      <br />
                    <b style ={{fontSize: "25px"}}> <label>Name : </label></b>
                       
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="name" 
                            value={newname}
                            onChange={(e)=> setNewname(e.target.value)}
                     
                           ></input></Box>
                           <br/>
                           <Box textAlign='center'>
                           <b style ={{fontSize: "25px"}}> <label>Description : </label></b>
                        <input 
                            type="text" 
                            name="desc" 
                            placeholder="desc"
                            value={newdesc}
                            onChange={(e)=> setNewdesc(e.target.value)}
                     
                         >

                         </input>

                </Box>
                <Box textAlign='center'>
            <button variant='contained' className = "foot">
                  Edit</button>
                  </Box>
                </form>
        )}
                </Card>
   

  );
  
};

export default Details;
