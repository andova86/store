import { Card, CardActionArea, CardMedia, Grid, Typography, Container, Chip, Link, Skeleton } from '@mui/material'
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
                               
                                  <Chip 
                                  color='secondary' 
                                  label={product.product_item.product.category.name} 
                                  sx={{ position:'absolute', zIndex: 99 , top: '10px', left: '10px' }}
                                  variant={'outlined'}
                                  /> 

                                <Grid container spacing={2}>
                                    {/* <Grid item xs={12} display='flex' justifyContent={'end'} sx={{mb:2, mt:1}}>
                                        {
                                            getColorCategory(product.category.name)
                                        }
                                    </Grid> */}

                                    <Grid item xs={12} >
                                        
                                            <CardMedia
                                                component="img"

                                                image={product.product_item.product.product_image}
                                                alt={product.product_item.product.name}
                                                height="250"
                                                width="220"
                                                sx={{
                                                    objectFit: "contain", 
                                                    borderRadius: 5 ,
                                                    mt:2,
                                                    
                                                    display: isImageLoaded ? "block" : "none",
                                                }}
                                                onLoad={() => setisImageLoaded(true)}
                                            />
                                       

                                        {isImageLoaded ? (
                                            ""
                                        ) : (
                                            <Skeleton variant="rectangular" width={250} height={220} />
                                        )}




                                    </Grid>

                                    <Grid item xs={12}>
                                        <Container>
                                            <Typography variant="body1" >{product.product_item.product.full_name}</Typography>
                                            <Typography variant="caption" color={'GrayText'}>{product.product_item.product.short_description}</Typography>

                                            <Typography variant="h5" sx={{fontWeight:700, my:2}}>{`$${product.current_price}`}</Typography>


                                        </Container>

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
