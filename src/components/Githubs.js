import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import Details from "./Details";
import { Box,Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Grid from '@material-ui/core/Grid'
import { AuthContext } from "../App";
import { Redirect } from "react-router-dom";

import { useHistory } from "react-router-dom";
const style = makeStyles({
  titleItemRight: {
    color: 'black',
   
    top: '0%',
    height: 30,
    float: 'right',
    position: 'relative',
     all: 'unset',
    width: '70px',
    fontSize : '40',
    alignSelf: 'flexEnd',
    justifyContent: 'center'
  }
});



 export default function Githubs() 
 {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [coun,setCoun] = useState(0);
  const [repos,setRepos]=useState([]);
  const [toget,setToget]=useState([]);
  const [loaded, setLoaded] = useState(false);
  const { state, dispatch } = useContext(AuthContext);

  const [showrepos, setShowrepos] = useState([]);
  
 useEffect(()=>
  { 
    if (!state.isLoggedIn) {
      return <Redirect to={`/login`}/>;
    }
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('user');
    // console.log(myParam)
   var  HOW_ARE=
  `
  {
    user(login : "${myParam}") 
    {
      repositories(first: 100)
       {
        nodes 
        {
          name
          url
          id
          description
          nameWithOwner
          createdAt
          issues(first: 100, states: OPEN) 
          {
            totalCount
           
          }
         
        }
        pageInfo 
        {
          hasNextPage
        }
        totalCount
      } 
    }
  
}`
    fetch('https://api.github.com/graphql',
    {
      method: "POST",
      headers: { 
        'Authorization': 'Bearer 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', 
         'Content-Type': 'application/json'
      },
      body:JSON.stringify({query : HOW_ARE })
    }).then((response)=>response.json())
    .then((data) => {
      setRepos(data.data.user.repositories.nodes);
      setCoun(data.data.user.repositories.totalCount);
      //if else condition
      // setShowrepos(showrepos.slice(start,end));
      console.log(start, end)
      setShowrepos(data.data.user.repositories.nodes.slice(start,end))
      setToget(data.data.user.repositories.nodes.map(itemx =>{
        return(
        <Details
          contact={itemx}
          key={itemx.id}
         />
        );
        }));
      setLoaded(true);
    })
  },[]);

// same as previous which uses minus5

function add5()
{
  var curr=start;
  console.log(repos.length)
  if(curr<repos.length)
  {
    setStart(+curr+5);
    setEnd(+end+5)
  }
  
  setShowrepos(showrepos.slice(+start,+end));
  console.log(start, end, showrepos)
}
  function sub5(){
    if(start>0)
    {
      setStart(start-5);
      setEnd(end-5);
    }
  

    setShowrepos(showrepos.slice(start,end));
    console.log(start, end, showrepos)
  }  

  useEffect(()=>{
    setShowrepos(repos.slice(start,end));
  }, [start])

  if (!state.isLoggedIn)
   {
    return <Redirect to="/login" />;
  }

const handleLogout = () => {
  state.isLoggedIn=false;
  // return <Redirect to="/login" />;
  dispatch({
    type: "LOGOUT",
    payload: { isLoggedIn: false }
  });
  window.location.reload()
 console.log('clicked');
} 
const classes=style();
  return (

    
    <Grid container justifyContent="center" alignItems="center">
     
   
   
    <Card sx={{ Width: 600 }}>
    <Button variant="contained" color="secondary" style={{float :"right"}} onClick={()=> handleLogout()}>Log Out</Button>
   
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
     {loaded && repos && showrepos.map(item =>(
      <div>
      
      <li key={item.id}> 
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
         {item.name}
        </Typography>
      </CardContent>
    
      <Button color="secondary" style={{backgroundColor: '#12824C', color: '#FFFFFF'}}variant="contained"> <a href={item.url} target="_blank" style={{color:"white"}}>URL Link</a></Button>
      
      
          
        
            
   
          <Link to={{
            pathname:'/details',
            state:{
              name: item.name,
              id: item.id,
              url : item.url,
              desc: item.description,
             naow:item. nameWithOwner,
              crea:item.createdAt,
              iss: item.issues.totalCount,
              cou: coun
              // over: item.issue. issueOrPullRequest
              
                  }
          }}>
             <Button color="primary" variant="contained"> Details</Button>
     
          </Link>
      
      
       </li>
     </div>
     ))}
   
      </ul>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       
      <Button onClick={sub5} >
      <Box sx={{ bgcolor: 'warning.main', color: 'success.contrastText', p: 2 }}>
         Previous
        </Box>
</Button>
     <Button onClick={add5} >
     <Box sx={{ bgcolor: 'warning.main', color: 'success.contrastText', p: 2 }}>
          Next
        </Box>
</Button>

        </Typography>
        </CardContent>
      
        </Card>
        </Grid>
       );
 }