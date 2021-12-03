import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import Details from "./Details";
import { Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Grid from '@material-ui/core/Grid'
const HOW_ARE=
  `
  {
    user(login : "surya1811") 
    {
      repositories(first: 10)
       {
        nodes 
        {
          name
          url
          id
          description
        }
        pageInfo 
        {
          hasNextPage
        }
      } 
    }
  
}`
 export default function Githubs() 
 {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  
const [repos,setRepos]=useState([]);
const [toget,setToget]=useState([]);
const [loaded, setLoaded] = useState(false);


// const [showrepos, setShowrepos] = useState([]);
// const [start, setStart] = useState(0);
//  useEffect(()=>
//   {
//     console.log(window.location.url);
//     fetch('https://api.github.com/graphql',
//     {
//       method: "POST",
//       headers: { 
//         'Authorization': 'Bearer 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', 
//          'Content-Type': 'application/json'
//       },
//       body:JSON.stringify({query : HOW_ARE })
//     }).then((response)=>response.json())
//     .then((data) => {
//       setRepos(data);
//       console.log(data);
//       //if else condition
//       // setShowrepos(data.slice(0,5));
//       setToget(data.data.user.repositories.nodes.map(itemx =>{
//         return(
//         <Details
//         contact={itemx}
//           key={itemx.id}
//          />
//         );
//         }));
//       setLoaded(true);
//     })
//     console.log('hii');
//   },[]);
useEffect(()=>
{
  console.log('how are yousdiohliu');
},[]);
  




// same as previous which uses minus5


  return (
    <Grid container justifyContent="center" alignItems="center">
    <Card sx={{ Width: 600 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          S
        </Avatar>
      }
      title="Welcome to Github"
        subheader="My Repositories"
      />
     <ul>
     {loaded && repos && repos.data.user.repositories.nodes.map(item =>(
      <div>
      
      <li key={item.id}> 
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
         {item.name}
        </Typography>
      </CardContent>
    
      <Button color="secondary" variant="contained"> <a href={item.url} target="_blank" style={{color:"white"}}>URL Link</a></Button>
      
      
          
            
   
          <Link to={{
            pathname:'/details',
            state:{
              name: item.name,
              id: item.id,
              url : item.url,
              desc: item.description
            }
          }}>
             <Button color="Success" variant="contained"> Details</Button>
     
          </Link>
      
      
       </li>
     </div>
     ))}
   
      </ul>
      
   
      
      
        </Card>
        </Grid>
       );
 }



 function add10()
{
  var curr=start;
  if(curr<repos.length)
  {
    setStart(curr+5);
   setEnd(end+5)
  }
}
  function sub10(){
    if(start>0)
    {
      setStart(start-5);
      setEnd(end-5);
    }
  }  
  