import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Image from "../image"
import ProductCard from "./ProductCard"

import FilterCategory from "../Filters/FilterCategory"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  pad: {
    paddingTop: '20px',
    paddingBottom: '20px'
  }
})

export default function ProductList(props) {
  const classes = useStyles()

 

  return (
    <Grid container spacing={4} >
      <Grid item xs={12} container spacing={1} className={classes.pad}>
        <Grid item md={6} xs={12}>
          <FilterCategory/>
        </Grid>
        <Grid item md={6} xs={12}>
        <FilterCategory/>
        </Grid>
      </Grid>

      
      
      <Grid item xs={12} md={6} lg={4}>
        <ProductCard
         rating='3'
         price='1500'
         
          alt="Prueba"
          tittle="Solo un "
          desc="Eos in primis nemore, est eu dicat deseruisse, usu fuisset albucius id. Inani clita aeterno ius eu, cetero epicuri cu qui, zril sanctus ut qui. "
        />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <ProductCard
        rating='2'
        price='2000'
        
          alt="Prueba"
          tittle="Solo un "
          desc="Eos in primis nemore, est eu dicat deseruisse, usu fuisset albucius id. Inani clita aeterno ius eu, cetero epicuri cu qui, zril sanctus ut qui. "
        />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <ProductCard
        rating='4'
        price='3500'
        
          alt="Prueba"
          tittle="Solo un "
          desc="Eos in primis nemore, est eu dicat deseruisse, usu fuisset albucius id. Inani clita aeterno ius eu, cetero epicuri cu qui, zril sanctus ut qui. "
        />
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <ProductCard
         rating='3'
         price='500'
         
          alt="Prueba"
          tittle="Perrro "
          desc="Eos in primis nemore, est eu dicat deseruisse, usu fuisset albucius id. Inani clita aeterno ius eu, cetero epicuri cu qui, zril sanctus ut qui. "
        />
      </Grid>
    </Grid>
  )
}
