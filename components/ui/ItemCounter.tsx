import { FC, useState } from "react"
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"


interface Props {
  setCant: any,
  currentValue: number

}

export const ItemCounter:FC<Props> = ({setCant, currentValue}) => {

const handleAddValue = () => {
  const newValue = currentValue + 1
 // setvalue(newValue)
  setCant(newValue)

 
}

const handleRemoveValue = () => {
  if(currentValue > 1)
  {
    const newValue = currentValue - 1
     //setvalue(newValue)
     setCant(newValue)

  }
  
 
}


  return (
     <Box display={'flex'} alignItems={'center'} >
          <IconButton onClick={handleRemoveValue} disabled={currentValue === 1}>
            <RemoveCircleOutline />         
          </IconButton>

          <Typography sx={{width:40 , textAlign:'center'}}>{ currentValue }</Typography>

          <IconButton onClick={handleAddValue} >
            <AddCircleOutline />         
          </IconButton>
     </Box>
  )
}
