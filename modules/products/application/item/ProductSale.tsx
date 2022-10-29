import { ArrowCircleRightOutlined, ArrowRightTwoTone } from '@mui/icons-material';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { FC } from 'react'
import styles from "./ProductFake.module.css";

interface Props {
    title: string,
    percent: number,

}
export const ProductSale:FC<Props> = ({ title, percent }) => {



  return (
    <Card sx={{ height: {xs:'100%',lg:'90%'} , mb:0 , pb:0 ,px:2}} className={styles.boxSale}>
    <CardContent>

    <Typography variant="h5" color="white" gutterBottom >
        {`${percent}% de Descuento`}
      </Typography>


      <Typography component="div" sx={{ my: 3 }} color={'white'}>
        {title}
      </Typography>

    

    </CardContent>
    <CardActions>
      <Button size="large" variant='outlined' sx={{mb:1}}>
        <ArrowCircleRightOutlined sx={{mr:2}}/>
        Ver ahora</Button>
    </CardActions>
  </Card>
  )
}
