import { Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = () => {
  return (
    <div>
         <h1 class="dis">DISNEY</h1>
        <Grid container spacing={3}>
        
        <Grid item xs={3}>
        <h1>welcome to grid three</h1>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://th.bing.com/th/id/OIP.9Snxw7QvR_Wh0pO10Y2MJgAAAA?w=474&h=669&rs=1&pid=ImgDetMain.jpg" height="100"
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
        </Grid>
        <Grid item xs={3}>
        <h1>welcome to grid three</h1>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://i.pinimg.com/736x/41/0d/b8/410db84b76bbcf725c130908aff34138--average-girl-the-incredibles.jpg" height
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
        </Grid>
        <Grid item xs={3}>
        <h1>welcome to grid three</h1>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://www.writeups.org/wp-content/uploads/Rapunzel-Tangled-Disney.jpg"
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
        </Grid>
        <Grid item xs={3}>
        <h1>welcome to grid three</h1>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://www.greenscene.co.id/wp-content/uploads/2019/06/Frozen-2-1024x731.jpg"
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
        </Grid>
      </Grid>
    </div>
  )
}

export default Product