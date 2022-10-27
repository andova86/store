import { Grid, Typography } from '@mui/material'
import { FC } from 'react'
import { IProductAsere } from '../../domain/product'
import { ProductCard } from '../item/ProductCard'

interface Props {
products: IProductAsere[]
}

export const ProductList:FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4} sx={{mt:2}}>

      <Grid item xs={12}>
        <Typography variant="h2" color="primary"  sx={{fontWeight:900}}>
          Productos 
        </Typography>
      </Grid>
    {
     products.map(product => (
        <ProductCard product={product} key={product.id}/>
      ))
    }

     
  </Grid>
  )
}
