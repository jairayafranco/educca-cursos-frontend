import { Fragment } from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts'; // desinstalar recharts
import Title from './Title';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function VideoPlayer() {
    return (
        <>
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0VybnVj8OH4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </>
    );
}

export function ButtonVideoLessons() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
            <Button variant='contained'>anterior lección</Button>
            <Button variant='contained'>siguiente lección</Button>
        </div>
    );
}

export function VideoDescription() {
    return (
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', marginTop: 1 }}>
            <Typography variant='h6' gutterBottom>
                Descripción del video
            </Typography>
            <Typography variant='body1' gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id eleifend mauris,
                et rhoncus elit. Vestibulum lorem dui, ultricies et posuere sit amet, dapibus et eros.
                Donec consectetur aliquam justo, in vehicula urna auctor vel. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sem libero,
                accumsan eu facilisis eget, feugiat ac sapien. Quisque tempor bibendum ex quis blandit.
            </Typography>
        </Paper>
    );
}