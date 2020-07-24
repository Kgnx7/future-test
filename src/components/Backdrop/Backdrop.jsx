import React from 'react'
import { useSelector } from 'react-redux'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#6ae695',
    },
}))

export default function SimpleBackdrop() {
    const classes = useStyles()

    const dataLoading = useSelector((state) => state.table.loading)

    return (
        <Backdrop className={classes.backdrop} open={dataLoading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
