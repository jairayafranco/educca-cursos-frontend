import { Fragment } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

export default function AddComment() {
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
            <Button variant="contained" sx={{ mt: 1 }}>Comentar</Button>
        </Fragment>
    );
}