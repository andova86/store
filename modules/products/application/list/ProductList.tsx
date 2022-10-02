import { Grid, Pagination } from '@mui/material'
import { FC } from 'react'
import { IProductFake } from '../../domain/productFake'
import { IProductPlatzi } from '../../domain/productPlatzi'
import { ProductFakeCard } from '../item/ProductFakeCard'

interface Props {
products: IProductPlatzi[]
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
