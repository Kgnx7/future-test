import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Table from './Table'
import { makeStyles } from '@material-ui/core/styles'

import { changeRequirement } from './tableSlice'

// import { getData, changeRequirement, addNewItem } from './tableSlice'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        marginTop: theme.spacing(15),
        maxWidth: '600px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 0,
        padding: '12px 30px',
    },
}))

export default function Milestone() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const isBigDataRequired = useSelector(
        (state) => state.table.isBigDataRequired
    )

    const handleButtonClick = (isBigDataRequired) => {
        dispatch(changeRequirement(isBigDataRequired))
    }

    return isBigDataRequired === null ? (
        <Container>
            <div className={classes.root}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => handleButtonClick(false)}
                >
                    Небольшой набор данных 😐
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={() => handleButtonClick(true)}
                >
                    Большой набор данных 🙀
                </Button>
            </div>
        </Container>
    ) : (
        <Table isBigDataRequired={isBigDataRequired} />
    )
}
