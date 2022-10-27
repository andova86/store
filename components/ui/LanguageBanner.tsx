import { List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material'
import React from 'react'

const options = [
    'EN',
    'ES',
    
  ];

export const LanguageBanner = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (
      event: React.MouseEvent<HTMLElement>,
      index: number,
    ) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <> 
     <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' , width: '100px', py:0, my:0, color:'#0077b6', display: { xs: "none", md: "flex"}}}
         
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary={options[selectedIndex]}
        
          />
        </ListItem>

        
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
           
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    
    </>
  )
}
