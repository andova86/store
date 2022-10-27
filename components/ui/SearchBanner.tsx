import { SearchOutlined, SearchRounded } from '@mui/icons-material'
import { Paper, IconButton, InputBase, Divider, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

export const SearchBanner = () => {

    const [category, setcategory] = useState('Todas')

    const arrCategory = ['Todas' , 'Vinos', 'Refrescos', 'Rones', 'Carnes']

    return (
        <Paper
            component="form"
            elevation={1}
            sx={{ display: { xs: "none", md: "flex"}, alignItems: 'center', width:'50%', }}
        >
            <TextField
                id="standard-select-currency"
                select
                label="Categoría"
                sx={{minWidth:'200px', pt:0, mt:0}}
                value={category}
                size={'small'}
                onChange={(e) => { setcategory(e.target.value) }}
                // helperText="Please select your currency"
                variant="outlined"
               
                
            >
                {arrCategory.map((option) => (
                    <MenuItem key={option} value={option} sx={{pt:0, mt:0}}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar productos..."
                inputProps={{ 'aria-label': 'search google maps', 'variant' :'outlined' }}
            />
         {/*    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchOutlined />
            </IconButton> */}
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <SearchRounded />
            </IconButton>
        </Paper>
    )
}
