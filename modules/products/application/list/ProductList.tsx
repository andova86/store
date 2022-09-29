import { Grid } from '@mui/material'
import { FC } from 'react'
import { IProductFake } from '../../domain/productFake'
import { ProductFakeCard } from '../item/ProductFakeCard'

interface Props {
products: IProductFake[]
}

export const ProductList:FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
    {
     products.map(product => (
        <ProductFakeCard product={product} key={product.id}/>
      ))
    }
  </Grid>
  )
}
