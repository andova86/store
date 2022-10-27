import React from 'react'
import Grid from '@mui/material/Grid'
import { Box, Typography } from '@mui/material'
import { CategoryCard } from '../item/CategoryCard'


export const ListCategories = () => {
  return (
    
    <Grid container spacing={2}>
        <Grid item md={12} >
            <Box display={'flex'} alignItems={'end'}>
                
                <Typography variant="h2" color="primary"  sx={{fontWeight:900}}>
                Buscar por Categorías 
        </Typography>

                {/* <Typography variant="caption" color="primary" sx={{ml:2}}>todas las categorías</Typography> */}
            </Box>

        </Grid>

          <Grid item md={12} >
              <Grid container spacing={2}>
                  <Grid item>
                      <CategoryCard img={''} title={'Vinos'} />
                  </Grid>

                  <Grid item>
                      <CategoryCard img={''} title={'Jugos'} />
                  </Grid>

                  <Grid item>
                      <CategoryCard img={''} title={'Refrescos'} />
                  </Grid>
              </Grid>

          </Grid>

    </Grid>
  )
}
