import { makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '10px 50px',
        padding: 10,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        marginLeft: 10,
        backgroundSize: 'auto',
        width: 1000,
        height: 500,
        // maxWidth: 500,
        // maxHeight: 500,
    },
}));
export default function Coment() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" color="textPrimary"  >
                Opiniones sobre el producto
            </Typography>

        </Paper>
    )

}
