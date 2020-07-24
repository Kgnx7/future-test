import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Table from './Table'
import { makeStyles } from '@material-ui/core/styles'

import { changeRequirement } from './tableSlice'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        marginTop: theme.spacing(15),
        maxWidth: '600px',
        display: 'flex',
        // flexFlow: 'row wrap',
        justifyContent: 'space-between',
    },
    button: {
        // flex: '0 0 auto',
        borderRadius: 0,
        padding: '12px 30px',
        // textTransform: 'capitalize',
    },
}))

// TODO: сделать кастомные кнопки, как на сайте https://future-group.ru/
export default function Milestone() {
    const classes = useStyles()
    const dispatch = useDispatch()
    // const [isBigDataRequired, setIsBigDataRequired] = useState(null)
    const isBigDataRequired = useSelector(
        (state) => state.table.isBigDataRequired
    )

    const handleButtonClick = (isBigDataRequired) => {
        // setIsBigDataRequired(isBigDataRequired)
        dispatch(changeRequirement(isBigDataRequired))
    }

    return isBigDataRequired === null ? (
        <Container>
            <div className={classes.root}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(event) => handleButtonClick(false)}
                >
                    Небольшой набор данных 😐
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={(event) => handleButtonClick(true)}
                >
                    Большой набор данных 🙀
                </Button>
            </div>
        </Container>
    ) : (
        <Table isBigDataRequired={isBigDataRequired} />
    )
}
