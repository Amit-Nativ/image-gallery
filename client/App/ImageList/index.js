import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, CircularProgress, GridList, GridListTile, makeStyles, Typography } from '@material-ui/core'

import useFetch from '../../hooks/use-fetch'
import ErrorCard from './components/ErrorCard'
import Image from './components/Image'

export default () => {
    const classes = useStyles();

    const { data, error, loading } = useFetch('/api/gallery');

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
