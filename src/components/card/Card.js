import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: 10,
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
        width: 100,
        backgroundSize: 'auto',
    },
}));

export default function ProductCard(props) {
    const [nickname, setNickname] = useState("");
    useEffect(() => {
        async function fetchData() {
            var response = await fetch('https://api.mercadolibre.com/users/' + props.reseller);
            var json = await response.json();
            setNickname(json.nickname)
        }
        fetchData();
    }, [props.reseller]);

    const classes = useStyles()
    const thumbnail = props.thumbnail

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={thumbnail}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {props.price}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {nickname}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    )

}

