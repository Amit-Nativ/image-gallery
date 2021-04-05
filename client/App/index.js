import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import ImageList from './ImageList'

export default () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <ImageList />
            </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '10px',
        width: '600px'
    }
})