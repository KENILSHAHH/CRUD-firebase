import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div >
    <div class="row"  style={{width: "1000px", margin: "200px", height: "500px", marginLeft: "100px"}}>
  {/* <div class="col-sm-4" >
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">English</h5>
        <p class="card-text">The language you always struggle with in your life</p>
        <Link to="./English.js" class="btn btn-primary">Get topics</Link>
      </div>
    </div>
  </div> */}
  {/* <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Science</h5>
        <p class="card-text">Stream you choose once you score more than 90% in your 10th std</p>
        <Link to="./Science.js" class="btn btn-primary">Get topics</Link>
      </div>
    </div>
  </div> */}
  <div class="col-sm-8">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Maths</h5>
        <p class="card-text">Due to time constraint I was not able to make UI better. But backend(firebase) is working perfectly. I would really appreciate if i get an interview oppurtunity </p>
        <Link to="./Maths.js" class="btn btn-primary">Get Topics</Link>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Card
// import * as React from 'react';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Word of the Day
//       </Typography>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//     <Button variant="contained">Contained</Button>
//     </CardActions>
//   </React.Fragment>
// );

// export default function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }

