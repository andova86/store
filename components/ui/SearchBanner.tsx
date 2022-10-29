import { SearchOutlined, SearchRounded} from '@mui/icons-material'
import { Paper, IconButton, InputBase, Divider, TextField, MenuItem , Button , InputAdornment} from '@mui/material'
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
                sx={{minWidth:'200px', pt:0, mt:0, borderRadius:0}}
                value={category}
               
                onChange={(e) => { setcategory(e.target.value) }}
                // helperText="Please select your currency"
                variant="filled"
               
                
            >
                {arrCategory.map((option) => (
                    <MenuItem key={option} value={option} sx={{pt:0, mt:0 , borderRadius:0}}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>

            <TextField id="filled-basic" label="" variant="filled" fullWidth sx={{borderRadius:0}}
             InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" color="primary">
                      <SearchOutlined />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            
        </Paper>
    )
}
