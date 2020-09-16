import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import searchAction from './../../actions/ProductStore'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        margin: 'auto',
        marginBottom: 10,
        marginTop: 10,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));


export default function SearchBar(props) {
    const dispatch = useDispatch()
    const capitalizar = string => {
        return string.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    }
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    const search = useCallback(async e => {
        e.preventDefault();
        var term = capitalizar(searchTerm);
        document.title = term + ' - Estos y mas productos en Velez Shops';
        var response = await fetch('https://api.mercadolibre.com/sites/MCO/search?q=' + searchTerm);
        var json = await response.json();
        dispatch(searchAction(json))

    }, [dispatch, searchTerm])
    const classes = useStyles();
    return (
        <>
            <Paper component="form" className={classes.root} onSubmit={search}>
                <InputBase
                    className={classes.input}
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton className={classes.iconButton} onClick={search} >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </>
    )
}

