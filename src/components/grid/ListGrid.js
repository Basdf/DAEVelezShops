import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '../card/Card'
import { Link } from 'react-router-dom';
import { sendProductAction } from '../../actions/ProductStore';

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

export default function ListGrid() {
    const classes = useStyles();
    const state = useSelector((state) => state);
    const dispatch = useDispatch()
    const sendProduct= (product) =>{

        dispatch(sendProductAction(product))

    }
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
                            state.data && state.listProduct.results.map(product => {
                                return (
                                    <Link key={product.id} style={{ textDecoration: 'none' }} to={"/product/"+product.id} onClick={()=>{sendProduct(product)}}>
                                        <Card
                                            thumbnail={product.thumbnail}
                                            title={product.title}
                                            price={product.price}
                                            reseller={product.seller.id}
                                            id={product.id}
                                        >
                                        </Card>
                                    </Link>
                                )
                            })}
                    </Grid>
                </Grid>
            </div>

        </>
    )

}
