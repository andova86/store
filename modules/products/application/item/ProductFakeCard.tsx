import { Card, CardActionArea, CardHeader, CardMedia, Grid, Paper, Typography, Container, Avatar, Chip, Link } from '@mui/material'
import { FC } from 'react'
import { IProductFake } from '../../domain/productFake'
import NextLink from "next/link"

import styles from './ProductFake.module.css'
import Image from 'next/image'


interface Props {
    product: IProductFake
}
export const ProductFakeCard: FC<Props> = ({ product }) => {
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
            <Grid item xs={4} sm={4} md={4} xl={3} key={product.id}>
               
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
                                <Container>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} display='flex' justifyContent={'end'} sx={{mb:2, mt:1}}>
                                        {
                                            getColorCategory(product.category)
                                        }
                                    </Grid>

                                    <Grid item xs={12} >

                                        <Image src={product.image} layout="responsive" width={250} height={200}
                                            style={{ borderRadius: '20px' }} objectFit={'contain'} alt={product.title}/>

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
