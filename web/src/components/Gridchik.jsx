import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'

const Gridchik = () => {
  return (
    <div>
    <Grid container spacing={2}>
        <Grid item xs={8} className='image'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i2-prod.mirror.co.uk/incoming/article4576061.ece/ALTERNATES/s615/PAY-Jasper-the-dog.jpg" height="350px" width="350px"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        
        </Grid >
        <Grid item xs={2}>
        <h1>welcome to grid two</h1>
        <img src="https://3.bp.blogspot.com/-oSB0LcDMMJE/V6DvdOFR4kI/AAAAAAAArDs/LplavJ_b6GMPc6ef8c5Yr4_PXQ8Ff4nxgCLcB/s1600/arch6.jpg" height="350px" width="350px" />
        </Grid>
        <Grid item xs={2}>
        <h1>welcome to grid three</h1>
        </Grid>
        <Grid >
        <h1>welcome to grid four</h1>
        </Grid>
    </Grid>
    </div>
    
  )
}

export default Gridchik