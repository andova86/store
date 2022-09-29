import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import React, { FC, useMemo, useState } from 'react'
import { IProduct } from '../../domain/product'
import NextLink from "next/link"


interface Props {
    product: IProduct
}

export const ProductCard:FC<Props> = ({product}) => {

    const [isHovered, setisHovered] = useState(false)

    const productImage = useMemo(() => {
        return isHovered 
        ? `products/${product.images[1]}`
        : `products/${product.images[0]}`
    }, [isHovered, product.images])

  return (
    <Grid item xs={6} sm={4} key={product.slug}
    onMouseEnter={() => setisHovered(true)}
    onMouseLeave={() => setisHovered(false)}
    >
          <Card>
            <NextLink href={'product/slug'} passHref prefetch={false}>
            <CardActionArea>
              <CardMedia 
              component="img" 
              image={productImage} 
              alt={product.title}
              className="fadeIn"
              />
            </CardActionArea>

            </NextLink>
            
          </Card>

          <Box sx={{mt:1 }} className="fadeIn">
            <Typography fontWeight={700}>{ product.title}</Typography>
            <Typography fontWeight={500}>{`$${product.price}`}</Typography>

          </Box>
        </Grid>
  )
}
