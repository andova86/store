import { SearchOutlined } from "@mui/icons-material";
import {
    Box,
    List,
    ListItem,
    Input,
    InputAdornment,
    IconButton,
    ListItemText,
    Paper,
} from "@mui/material";
import React from "react";

export const SideCategory = () => {
    return (
        <>
            <Paper>
                <List>
                    <ListItem>
                        <Input
                            type="text"
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility">
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>

                    <ListItem button>
                        <ListItemText primary={"Categorías"} onClick={() => {}} />
                    </ListItem>
                </List>
            </Paper>
        </>
    );
};
