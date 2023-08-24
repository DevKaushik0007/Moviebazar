// function HomePage(){
//     return(
//         <h1>New App</h1>
//     );
// }

// export default HomePage;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function HomePage(props) {
  return (
    <>
    <Card sx={{ maxWidth: 345 ,marginLeft:"15px"}}>
      <CardMedia
        sx={{ height: 265 }}
        image={props.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly />
        <Typography variant="body2" color="text.secondary">
          {props.content} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</>
);
}