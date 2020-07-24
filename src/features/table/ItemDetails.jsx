import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { lighten, fade, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(2),
    },
}))

export default function ItemDetails({ selectedItem }) {
    const classes = useStyles()
    return (
        selectedItem && (
            <Paper component="section" className={classes.root}>
                <Typography variant="h3" gutterBottom align="center">
                    Детали
                </Typography>
                <Typography variant="body1">
                    <Typography variant="caption">Идентификатор: </Typography>
                    {selectedItem.id}
                </Typography>
                <Typography variant="body1">
                    <Typography variant="caption">ФИО: </Typography>
                    {[selectedItem.firstName, selectedItem.lastName]
                        .join(' ')
                        .trim()}
                </Typography>
                <Typography variant="body1">
                    <Typography variant="caption">
                        Электронная почта:{' '}
                    </Typography>
                    {selectedItem.email}
                </Typography>
                <Typography variant="body1">
                    <Typography variant="caption">Телефон: </Typography>
                    {selectedItem.phone}
                </Typography>
                <Typography variant="body1">
                    <Typography variant="caption">Адрес: </Typography>
                    {[
                        selectedItem.address.state,
                        selectedItem.address.city,
                        selectedItem.address.streetAddress,
                        selectedItem.address.zip,
                    ]
                        .join(', ')
                        .trim()}
                </Typography>
            </Paper>
        )
    )
}

ItemDetails.propTypes = {
    selectedItem: PropTypes.object.isRequired,
}
