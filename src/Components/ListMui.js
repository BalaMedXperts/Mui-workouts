import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText ,Divider} from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail'

const ListMui = () => {
  return (
    <Box sx={{width:'400px',bgcolor:"#efefef"}}>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                            <MailIcon />
                       </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List Item 1' secondary='Secondary Text' />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                <ListItemAvatar>
                        <Avatar>
                            <MailIcon />
                       </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List Item 2' secondary='Secondary Text' />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                <ListItemAvatar>
                        <Avatar>
                            <MailIcon />
                       </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List Item 3' secondary='Secondary Text'/>
                </ListItemButton>
            </ListItem>
        </List>

    </Box>
  )
}

export default ListMui