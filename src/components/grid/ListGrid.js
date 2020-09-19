import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '../card/Card'
import { Link } from 'react-router-dom';
import TablePagination from '@material-ui/core/TablePagination';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    pagination: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        marginBottom: 10,
        width: 'fit-content'
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
    const [listProduct, setListProduct] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(50);
    useEffect(() => {
        async function fetchData() {
            var url = 'https://api.mercadolibre.com/sites/MCO/search?q=' + state.query + '&offset=' + (page * rowsPerPage) + '&limit=' + rowsPerPage
            var response = await fetch(url);
            var json = await response.json();
            setListProduct(json)
        }
        fetchData();
    }, [state, page, rowsPerPage]);
    const handleChangePage = async (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = async (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    if (listProduct === "") {
        return (
            <div></div>
        )
    }
    return (
        <>
            {state.data &&
                <div className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid item xs={3}>
                            {/* hacer el filtro usando la busqueda de search 
                            para obtener los filtros, el id del filtro es id que da el json */}
                            {/* <div style={{ margin: 10 }}>
                                <Typography variant="h5">
                                    Ordenar publicaciones
                                </Typography>
                                <Typography component="body1" variant="body1">
                                    filtro 2
                                </Typography>
                            </div> */}

                        </Grid>
                        <Grid item xs={9}>
                            {
                                listProduct.results.map(product => {
                                    return (
                                        <Link key={product.id} style={{ textDecoration: 'none' }} to={"/DAEVelezShops/" + product.id} >
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
                                })
                            }

                        </Grid>
                    </Grid>
                    <TablePagination
                        className={classes.pagination}
                        component="div"
                        count={1000}
                        page={page}
                        onChangePage={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[10, 30, 50]}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </div>
            }



        </>
    )

}
