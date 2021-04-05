import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, CircularProgress, GridList, GridListTile, makeStyles, Typography } from '@material-ui/core'

import useFetch from '../../hooks/use-fetch'
import ErrorCard from './components/ErrorCard'
import Image from './components/Image'

const imagesUrl = 'https://api.jonathanczyzyk.com/api/v1/images/small';
const headers = { 'x-api-key': "api-key-20b5ec06-2e0e-4978-b910-0fe9e6ee50fc" };

export default () => {
    const classes = useStyles();

    const { data, error, loading } = useFetch(imagesUrl, headers);

    if (error) {
        return (<ErrorCard />)
    }

    if (loading) {
        return (
            <CircularProgress size={70} />
        )
    }

    return (
        <Box className={classes.container}>
            {data.map(x => (
                <Image key={x.url} {...x} />
            ))}
        </Box>
    );
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    image: {
        height: '180px',
        width: '180px',
        margin: '7px',
        borderRadius: '12px',
        objectFit: 'cover'
    }
});
