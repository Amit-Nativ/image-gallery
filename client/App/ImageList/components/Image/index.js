import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

export default ({ url, description, likes, image }) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <img src={url} alt={description} className={classes.image} />
            <Box className={classes.overlay}>
                <Typography className={classes.text}>{description}</Typography>
                <Box className={classes.likes}>
                    <Typography className={classes.likesText}>
                        <span class="material-icons">&#xe87d;</span>
                        {likes}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    image: {
        height: '180px',
        width: '180px',
        borderRadius: '12px',
        objectFit: 'cover'
    },

    container: {
        position: 'relative',
        margin: '7px'
    },
    overlay: {
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '100%',
        bottom: 0,
        opacity: 0,
        justifyContent: 'center',
        alignItems: 'center',
        transition: '.5s ease',
        '&:hover': {
            opacity: 1
        }
    },
    text: {
        color: 'white',
        fontSize: '13px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },
    likes: {
        display: 'flex',
        position: 'absolute',
        bottom: '3px',
        left: '3px',
        color: 'white',
        width: '100%',
        height: '40px',
    },
    likesText: {
        fontSize: '10px',
        display: 'flex',
        alignItems: 'center'
    }
});
