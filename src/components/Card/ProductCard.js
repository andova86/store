import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from "../image";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import { Box, Grid } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProductCard(props) {
  const classes = useStyles();

  

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          
        >

           <Image/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.tittle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container>
        <Grid item xs={6}>
          <Typography color={'textPrimary'}>
             ${props.price}
          </Typography>
        </Grid>

        <Grid item xs={6}>
        <Rating
          name="simple-controlled"
          value={props.rating}
          size="small"
         
        />

        

        </Grid>

        <Grid item xs={12}>
        <Box pt={4} pb={4} justifyContent='space-between' display='flex'>
         <Button variant="outlined" size='small'
        color="primary"  >Ver más </Button>

<Button variant="outlined" size='small'
        color="primary"  startIcon={ <AddShoppingCartIcon />}> </Button>
      
        </Box>
        </Grid>


        </Grid>
    



        
      
       
      </CardActions>
    </Card>
  );
}
