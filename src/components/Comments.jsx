import { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Comments() {

    const generateComments = () => {
        const comments = [];

        for (let i = 0; i < 30; i++) {
            comments.push(
                <>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </>
            );
        }

        return comments;
    }

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Agrega un comentario...
            </Typography>
            <TextField
                label="Comentario"
                multiline
                rows={3}
                defaultValue=""
            />
            <Button variant="contained" sx={{ mt: 1, width: '10%' }}>Comentar</Button>

            <List sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'auto', maxHeight: 600, mt: 2 }}>
                {generateComments()}
            </List>
        </Fragment>
    );
}