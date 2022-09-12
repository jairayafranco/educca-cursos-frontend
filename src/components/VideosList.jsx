import { useState } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function VideosList() {
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const generateList = () => {
        const list = [];

        for (let i = 0; i < 30; i++) {
            list.push(
                <ListItem key={i} disablePadding>
                    <ListItemButton role={undefined} onClick={handleToggle(i)} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(i) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': i }}
                            />
                        </ListItemIcon>
                        <ListItemText id={i} primary={`Leccion ${i + 1}`} />
                    </ListItemButton>
                </ListItem>
            );
        }

        return list;
    }

    return (
        <>
            <List sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'auto' }}>
                {generateList()}
                {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem
                            key={value}
                            // secondaryAction={
                            // <IconButton edge="end" aria-label="comments">
                            //     <CommentIcon />
                            // </IconButton>
                            // }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`Leccion ${value + 1}`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })} */}
            </List>
        </>
    );
}