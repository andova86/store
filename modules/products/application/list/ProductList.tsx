import { Grid, Pagination } from '@mui/material'
import { FC } from 'react'
import { IProductAsere } from '../../domain/product'
import { IProductFake } from '../../domain/productFake'
import { IProductPlatzi } from '../../domain/productPlatzi'
import { ProductFakeCard } from '../item/ProductFakeCard'

interface Props {
products: IProductAsere[]
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
