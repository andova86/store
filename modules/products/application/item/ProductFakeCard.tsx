import { Card, CardActionArea, CardHeader, CardMedia, Grid, Paper, Typography, Container, Avatar, Chip, Link, Skeleton } from '@mui/material'
import { FC, useState } from 'react'
import { IProductFake } from '../../domain/productFake'
import NextLink from "next/link"

import styles from './ProductFake.module.css'
import Image from 'next/image'
import { IProductPlatzi } from '../../domain/productPlatzi'


interface Props {
    product: IProductPlatzi
}
export const ProductFakeCard: FC<Props> = ({ product }) => {

    const [isImageLoaded, setisImageLoaded] = useState(false);

const getColorCategory = (cat:string) => {
  let category = 'secondary'
  if(cat === 'jewelery')
  {
    return <Chip label={cat} color={'warning'} variant='outlined' /> 
  }

  if(cat === 'electronics')
  {
    return <Chip label={cat} color={'success'} variant='outlined' /> 
  }

  if(cat === "women's clothing")
  {
    return <Chip label={cat} color={'error'} variant='outlined' /> 
  }

  if(cat === "men's clothing")
  {
    return <Chip label={cat} color={'primary'} variant='outlined' /> 
  }

 
  return <Chip label={cat} color={'secondary'} variant='outlined' /> 

}

    return (
        <>
            <Grid item  xs={12} sm={6} md={6} lg={4} xl={3} key={product.id}>
               
                        <Card className={styles.productFake} elevation={8}>
                        <CardActionArea>
                            <NextLink 
                             href={{
                                pathname: "/product/[slug]",
                            }}
                            as={`/product/${product.id}`} 
                            passHref
                            >
                                <Link>
{/* 
                                  <Chip 
                                  color='primary' 
                                  label='No disponible' 
                                  sx={{ position:'absolute', zIndex: 99 , top: '10px' }}
                                  variant={'outlined'}
                                  /> */}
                                <Container>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} display='flex' justifyContent={'end'} sx={{mb:2, mt:1}}>
                                        {
                                            getColorCategory(product.category.name)
                                        }
                                    </Grid>

                                    <Grid item xs={12} >
                                         <Card>
                            <CardMedia
                                component="img"
                              
                                image={product.images[0]}
                                alt="green iguana"
                                sx={{
                                    objectFit: "cover",
                                    display: isImageLoaded ? "block" : "none",
                                }}
                                onLoad={() => setisImageLoaded(true)}
                            />
                        </Card>

                        {isImageLoaded ? (
                            ""
                        ) : (
                            <Skeleton variant="rectangular" width={500} height={200} />
                        )}


                                       

                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography variant="body1" >{product.title}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle1" >{`$${product.price}`}</Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                                </Link>
                            </NextLink>
                            
                        </CardActionArea>
                        </Card>

                    

            </Grid>

        </>


    )
}
