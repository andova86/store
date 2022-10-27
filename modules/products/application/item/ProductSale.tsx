import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { FC } from 'react'
import styles from "./ProductFake.module.css";

interface Props {
    title: string,
    percent: number,

}
export const ProductSale:FC<Props> = ({ title, percent }) => {



  return (
    <Card sx={{ height: '90%' , mb:0 , pb:0 ,px:2}} className={styles.boxSale}>
    <CardContent>

      <Typography component="div" sx={{ my: 3 }} color={'primary'}>
        {title}
      </Typography>

      <Typography variant="h5" color="text.secondary" gutterBottom >
        {`${percent}% de Descuento`}
      </Typography>


    </CardContent>
    <CardActions>
      <Button size="large" variant='outlined'>Ver ahora</Button>
    </CardActions>
  </Card>
  )
}
