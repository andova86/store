import React from 'react'

import { Paper, Grid, Button } from '@mui/material'
import { MenuBook } from '@mui/icons-material'


export const ProductFilter = () => {
  return (
    <Grid container spacing={2} >
       <Grid item xs={12}>
        <Paper sx={{display:'flex' , p:2}}>

            <Button
              variant="contained"
              color="primary"
              startIcon={<MenuBook />}
              
            >
              
            </Button>

        </Paper>

       </Grid>

       <Grid item xs={12}>
        
        </Grid>
      
    </Grid>
  )
}
