import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '10px 50px',
        padding: 10,
    },
    title: {
        width: '100%',
        height: 'fit-content',
        display: 'block'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
}));
export default function Coment(props) {
    const classes = useStyles();
    const [review, setReview] = useState("");
    useEffect(() => {
        async function fetchData() {

            var response = await fetch('https://api.mercadolibre.com/reviews/item/' + props.productId + "?limit=999");
            var json = await response.json()
            setReview(json)
        }
        fetchData();
    }, [props]);
    if (review === "") {
        return (
            <div></div>
        )
    }

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography className={classes.title} variant="h5" color="textPrimary"  >
                        Opiniones sobre el producto
                    </Typography>
                    <div>
                        <Typography style={{ width: 'fit-content', marginRight: 20, display: 'inline-flex' }} variant="h2"   >
                            {review.rating_average}
                        </Typography>
                        <Rating
                            style={{ color: '#3483FA' }}
                            name="half-rating"
                            value={(Math.round(review.rating_average))}
                            precision={0.5} readOnly size="large" />
                        <Typography className={classes.title} variant="body2" color="textSecondary"  >
                            {"Promedio entre " + review.paging.total + " opiniones"}
                        </Typography>
                    </div>



                    {review.reviews.map(review => {
                        return (
                            <LazyLoad height={5} offset={100} key={review.id}>
                                <div style={{ marginTop: 20 }} >
                                    <Rating
                                        style={{ color: '#3483FA' }}
                                        name="half-rating"
                                        value={(Math.round(review.rate))}
                                        precision={0.5} readOnly size="small" />
                                    <Typography variant="h5" color="textPrimary">
                                        {review.title}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary"  >
                                        {review.content}
                                    </Typography>
                                </div>

                            </LazyLoad>

                        )

                    })}

                </CardContent>
            </div>
        </Card>
    )



}
