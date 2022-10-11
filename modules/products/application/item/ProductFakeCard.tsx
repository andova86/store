import { Card, CardActionArea, CardMedia, Grid, Typography, Container, Chip, Link, Skeleton, Box, CardContent, CardActions, Button } from '@mui/material'
import { FC, useState } from 'react'
import NextLink from "next/link"

import styles from './ProductFake.module.css'
import { IProductAsere } from '../../domain/product'


interface Props {
    product: IProductAsere
}
export const ProductFakeCard: FC<Props> = ({ product }) => {

    const [isImageLoaded, setisImageLoaded] = useState(false);

    const getColorCategory = (cat: string) => {
        let category = 'secondary'
        if (cat === 'jewelery') {
            return <Chip label={cat} color={'warning'} variant='outlined' />
        }

        if (cat === 'electronics') {
            return <Chip label={cat} color={'success'} variant='outlined' />
        }

        if (cat === "women's clothing") {
            return <Chip label={cat} color={'error'} variant='outlined' />
        }

        if (cat === "men's clothing") {
            return <Chip label={cat} color={'primary'} variant='outlined' />
        }


        return <Chip label={cat} color={'secondary'} variant='outlined' />

    }

    return (
        <>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={product.id}>

                <Card className={styles.productFake} elevation={8} >
                    <CardActionArea>
                        <NextLink
                            href={{
                                pathname: "/product/[slug]",
                            }}
                            as={`/product/${product.id}`}
                            passHref
                        >
                            <Link>

                                {/*  <Chip
                                    color='secondary'
                                    label={product.product_item.product.category.name}
                                    sx={{ position: 'absolute', zIndex: 99, top: '10px', right: '10px' }}
                                    variant={'outlined'}
                                />
 */}
                                <Grid container spacing={2}>
                                    {/* <Grid item xs={12} display='flex' justifyContent={'end'} sx={{mb:2, mt:1}}>
                                        {
                                            getColorCategory(product.category.name)
                                        }
                                    </Grid> */}

                                    <Grid item xs={12} >
                                        <Box display={'flex'} justifyContent={'end'} sx={{ p: 1 }}>
                                            <Chip
                                                color='secondary'
                                                label={product.product_item.product.category.name}

                                                variant={'outlined'}
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} >


                                        {/*  <Card sx={{height:250, maxHeight:250}} elevation={0}>
                                            
                                        <CardMedia
                                                component="img"

                                                image={product.product_item.product.product_image}
                                                alt={product.product_item.product.name}
                                                 
                                                sx={{
                                                   
                                                   
                                                    
                                                    display: isImageLoaded ? "block" : "none",
                                                }}
                                                onLoad={() => setisImageLoaded(true)}
                                            />
                                        </Card>
                                        */}

                                        <Card sx={{ maxWidth: 345 }} elevation={6}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={product.product_item.product.product_image}
                                                    alt="green iguana"
                                                    sx={{ objectPosition: 'top', objectFit: 'contain', 
                                                    minHeight: '200', maxWidth:'100%',
                                                    display: isImageLoaded ? "block" : "none"}}
                                                   
                                                    onLoad={() => setisImageLoaded(true)}
                                                
                                                
                                                />
                                                {isImageLoaded ? (
                                            ""
                                        ) : (
                                            <Box display={'flex'} justifyContent={'center'}>
                                                <Skeleton variant="rectangular" width={250} height={220} />

                                            </Box>

                                        )}



                                                <CardContent>
                                                    
 


                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {product.product_item.product.full_name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {product.product_item.product.short_description}
                                                    </Typography>

                                                    <Typography variant="h5" sx={{ fontWeight: 700, my: 2 }}>{`$${product.current_price}`}</Typography>

                                                </CardContent>
                                            </CardActionArea>

                                        </Card>

                                       




                                    </Grid>


                                </Grid>

                            </Link>
                        </NextLink>

                    </CardActionArea>
                </Card>



            </Grid>

        </>


    )
}
