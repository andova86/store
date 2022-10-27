import { FC } from 'react'
import { Avatar, Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material'
import styles from './CategoryCard.module.css'


interface Props {
    img: string,
    title: string
}

function stringToColor(string: string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

function stringAvatar(name: string) {
    console.log(name);
    
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.substring(0, 1)}`,
    };
  }


export const CategoryCard:FC<Props> = ({ img , title}) => {


  return (
    <Card className={styles.categoryCard}>
      <CardContent sx={{display:'flex',justifyContent:'center' , alignItems: 'center', flexDirection:"column", }}>
      <Avatar {...stringAvatar(title)} sx={{mb:3}}/>
        <Typography variant='h6' color="text.secondary" >
          {title}
        </Typography> 
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  )
}
