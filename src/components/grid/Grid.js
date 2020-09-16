import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from './../card/Card'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export default function BodyGrid(props) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        {/* poner filtro aqui */}
                        
                    </Grid>
                    <Grid item xs={9}>
                        {/* hacer for con la informacion y las tarjetas */}
                        {
                            props.response.data && props.response.json.results.map(product => {
                                return (
                                    <Card key={product.id} 
                                    thumbnail={product.thumbnail}
                                    title={product.title}
                                    price={product.price}
                                    reseller={product.seller.id}
                                    id={product.id}
                                    >

                                    </Card>
                                )
                            })}
                    </Grid>
                </Grid>
            </div>

        </>
    )

}
