import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Rating from '@material-ui/lab/Rating';
import Coment from '../coment/Coment';



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

export default function ProductGrid() {
    let { id } = useParams();
    const classes = useStyles();
    const [product, setProduct] = useState("");
    const [review, setReview] = useState("");
    const [discount, setDiscount] = useState(false);
    const [nickname, setNickname] = useState("");
    var image = ""
    var i = 0
    useEffect(() => {
        async function fetchData() {

            var response = await fetch('https://api.mercadolibre.com/items/' + id);
            var json = await response.json()
            setProduct(json)
            if (product !== "") {
                response = await fetch('https://api.mercadolibre.com/users/' + product.seller_id);
                json = await response.json();
                setNickname(json.nickname)
            }


            response = await fetch('https://api.mercadolibre.com/reviews/item/' + id);
            json = await response.json()
            setReview(json)
            if (product.price !== product.original_price && product.original_price !== null) {
                setDiscount(true)
            }
        }
        fetchData();
    }, [id, product]);

    function formatCurrency(locales, currency, fractionDigits, number) {
        var formatted = new Intl.NumberFormat(locales, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: fractionDigits
        }).format(number);
        return formatted;
    }

    if (product === "" || review === "" || nickname === "") {
        return (
            <div></div>
        )
    }
    image = product.pictures[i].url
    return (
        <>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={image}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h4" variant="h4">
                            {product.title}
                        </Typography>
                        <Rating
                            style={{ marginTop: 10, color: '#3483FA' }}
                            name="half-rating"
                            value={(Math.round(review.rating_average))}
                            precision={0.5} readOnly />
                        <div>
                            {
                                !discount &&
                                <Typography style={{ marginTop: 20 }} variant="h3" >
                                    {formatCurrency("es-CO", "COP", 2, product.price)}
                                </Typography>
                            }
                            {
                                discount &&
                                <>
                                    <strike>
                                        <Typography style={{ marginTop: 20, color: 'gray' }} variant="h5" >
                                            {formatCurrency("es-CO", "COP", 2, product.original_price)}
                                        </Typography>
                                    </strike>
                                    <div style={{ display: 'inline' }}>
                                        <Typography style={{ display: 'inline' }} variant="h3" >
                                            {formatCurrency("es-CO", "COP", 2, product.price)}
                                        </Typography>
                                        <Typography style={{ margin: 20, color: '#00A650', display: 'inline' }} variant="h4" >
                                            {(Math.floor((100 - (product.price * 100) / product.original_price))) + "% OFF"}
                                        </Typography>
                                    </div>
                                </>
                            }
                            {
                                (product.available_quantity) &&
                                <Typography variant="h5" color="textSecondary">
                                    Stock disponible
                                    </Typography>
                            }
                        </div>
                        <Typography style={{ marginTop: 20 }} variant="h5" color="textPrimary">
                            {nickname}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
            <Coment productId={id}></Coment>
        </>
    )
}